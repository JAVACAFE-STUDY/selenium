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

driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnG')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 1000).then(()=>console.log('검색성공'));
// driver.quit();


