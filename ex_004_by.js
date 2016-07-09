/**
 * Created by YB on 2016-07-09.
 * BY : Describes a mechanism for locating an element on the page.
 * http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_By.html
 */
var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).then(()=>console.log('[name=q] 있음'));  // then이 붙은 것에 주목! 거의 모든 것들이 promise
driver.findElement(By.id('hplogo')).then(()=>console.log('#hplogo 있음'));
driver.findElement(By.className('gsfi')).then(()=>console.log('.gsfi 있음'));
driver.findElement(By.css('.gsfi')).then(()=>console.log('.gsfi 있음'));
driver.findElement(By.css('.gsfi')).then(()=>console.log('.gsfi 있음'));
driver.findElement(By.css('.xyz')).then(()=>console.log('.xyz 있음'));
