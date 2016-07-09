/**
 * Created by YB on 2016-07-09.
 * window : 브라우져의 크기 및 위치 지정
 * http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_Window.html
 */
const Driver = require('selenium-webdriver/chrome').Driver,
    driver = new Driver(),
    window = driver.manage().window();

window.setSize(1000, 700);
window.setPosition(200, 200);

driver.get('http://www.google.com/ncr');