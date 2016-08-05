/**
 * Created by YB on 2016-07-09.
 * Webelement 기본 예제
 *
 * Represents a DOM element.
 * WebElements can be found by searching from the document root using a WebDriver instance,
 * or by searching under another WebElement:
 *
 * http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html
 */

var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://www.google.com');
/*

var searchForm = driver.findElement(By.tagName('form'));    // searching from the document root using a WebDriver instance
var searchBox = searchForm.findElement(By.name('q'));       // by searching under another WebElement:
console.log('searchForm.__proto__ === searchForm.__proto__ : ', searchForm.__proto__ === searchForm.__proto__);

var logoDiv = driver.findElement(By.css('#lga'));
logoDiv.getAttribute('class').then((txt)=>console.log('# getAttribute("class") = ', txt));
logoDiv.getCssValue('height').then((txt)=>console.log('# getCssValue("height") = ', txt));
logoDiv.getInnerHtml().then((txt)=>console.log('# getInnerHtml() = ', txt));
logoDiv.getLocation().then((txt)=>console.log('getLocation() = ', txt));
logoDiv.getOuterHtml().then((txt)=>console.log('# getOuterHtml() = ', txt));
logoDiv.getSize().then((txt)=>console.log('getSize() = ', txt));
logoDiv.getTagName().then((txt)=>console.log('# getTagName() = ', txt));
logoDiv.getText().then((txt)=>console.log('# getText() = ', txt));   // 글자만 추출
*/

// 리스트 형식의 처리
// wait에 넘길 인자를 재정의하여 원하는 조건이 충족될 때까지 기다리기
var footerSpan = driver.findElement(By.css('#fsl'));
driver.wait(function() {
    return footerSpan.getText().then(function (text) {
        console.log('# text = ', text);  // 해당하는 값이 없는 경우 해당 로그가 일정 시간마다 계속 찍히는걸 확인할 수 있다.
        return text.indexOf('비즈니스') > -1;
    });
}).then(function () {
    console.log('원하는 정보가 있는지 확인됨');
    footerSpan.findElements(By.css('a')).then(function (eles) {
        var i=0, continueFlag=true;

        eleCheck(eles[i]);

        function eleCheck(ele) {
            console.log(i);
            ele.getText().then(function (text) {
                console.log(text);
                if(text.indexOf('비즈니스')>-1) {
                    ele.click();
                    continueFlag = false;
                } else {
                    if(i<eles.length) {
                        eleCheck(eles[++i]);
                    }
                }
            });
        }
    });
});


// searchBox.sendKeys('webdriver');

