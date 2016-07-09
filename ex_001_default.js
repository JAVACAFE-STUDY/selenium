/**
 * Created by YB on 2016-07-09.
 * 셀레늄 기본 예제
 * 크롬 드라이버 생성 - 드라이버로 브라우져 띄우기 - 구글 검색
 * http://seleniumhq.github.io/selenium/docs/api/javascript/index.html
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

