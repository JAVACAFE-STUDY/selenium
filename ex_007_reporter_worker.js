/**
 * Created by YB on 2016-07-09.
 * 드라이버를 reporter와 worker로 분리해서 사용
 */
//웹드라이버, By, 크롬드라이버 준비
const webdriver = require('selenium-webdriver'), By = webdriver.By;
const chrome = require('selenium-webdriver/chrome');

//워커와 레포트 준비
const worker = new webdriver.Builder().forBrowser('chrome').build();
const report = new webdriver.Builder().forBrowser('chrome').build();

//레포트의 준비
const reportUrl = 'http://www.bsidesoft.com/hika/wp/2196/report.html';
report.get(reportUrl);

//테스트시작
const testUrl = 'http://www.bsidesoft.com/hika/wp/2196/test1.html';
worker.get(testUrl);
worker.findElement(By.id('test1')).getText().then(
    v=>report.executeScript(
        `document.getElementById('report').innerHTML += "<li>${v == 'abc'}</li>";`
    )
);
