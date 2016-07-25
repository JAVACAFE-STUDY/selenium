/**
 * Created by YB on 2016-07-09.
 * Class for defining sequences of complex user interactions. Each sequence will not be executed until #perform is called.
 * http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/actions_exports_ActionSequence.html
 * 구글 접속 -> 'webdriver'로 검색 -> 검색결과가 나오면 첫 번째 글을 Ctrl + Shift 키와 함께 클릭(새로운 탭으로 열기)
 */
var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until,
    ActionSequence = require('selenium-webdriver/lib/actions').ActionSequence,
    Key = webdriver.Key
    ;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://www.google.com/ncr');

driver.findElement(By.name('q')).sendKeys('webdriver');
    driver.findElement(By.name('btnG')).click();

driver.wait(until.elementLocated(By.css('#rso'))).then(()=> {
    new ActionSequence(driver).
    keyDown(Key.CONTROL).
    keyDown(Key.SHIFT).
    click(driver.findElement(By.css('#rso .g a'))).
    perform();
});

