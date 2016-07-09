/**
 * Created by YB on 2016-07-09.
 * Webelement 기본 예제
 *
 * http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html
 *
 * Represents a DOM element.
 * WebElements can be found by searching from the document root using a WebDriver instance,
 * or by searching under another WebElement:
 */

var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://www.google.com');
var searchForm = driver.findElement(By.tagName('form'));    // searching from the document root using a WebDriver instance
var searchBox = searchForm.findElement(By.name('q'));       // by searching under another WebElement:
console.log('searchForm.__proto__ === searchForm.__proto__ : ', searchForm.__proto__ === searchForm.__proto__);
searchBox.sendKeys('webdriver');