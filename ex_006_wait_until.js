/**
 * Created by YB on 2016-07-09.
 *
 *

 Defines common conditions for use with WebDriver wait.

     Sample usage:

         driver.get('http://www.google.com/ncr');

         var query = driver.wait(until.elementLocated(By.name('q')));
         query.sendKeys('webdriver\n');

     driver.wait(until.titleIs('webdriver - Google Search'));
     To define a custom condition, simply call WebDriver.wait with a function that will eventually return a truthy-value (neither null, undefined, false, 0, or the empty string):

         driver.wait(function() {
           return driver.getTitle().then(function(title) {
             return title === 'webdriver - Google Search';
           });
         }, 1000);

 * http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/until.html
 */
var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;


var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

// url 설정
driver.get('http://www.naver.com/');

// By를 통한 Dom 접근
driver.findElement(By.css('#query')).sendKeys('설현');
driver.findElement(By.css('#search_btn')).click();

// 특정 요소가 존재할때까지 기다리다가 존재하는 경우에 실행
// 제한시간내에 존재하지 않는 경우는 throw exception
// return 되는 요소는 WebElement
const timeLimit = 5000;
driver.wait(until.elementLocated(By.css('.lnb2')), timeLimit).then((webElement)=>webElement.click());
