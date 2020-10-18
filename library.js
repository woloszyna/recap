var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var driver = new webdriver.Builder().forBrowser('chrome').build();


driver.get('https://library-app.firebaseapp.com');
driver.findElement(By.css('input'));
driver.findElement(By.css('.btn-primary'));
driver.quit();