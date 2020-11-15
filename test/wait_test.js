var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var until = webdriver.until;
var driver = new webdriver.Builder().forBrowser('chrome').build();


//This test is to make sure that previous days learnign is still ok and does not require re-learning.
driver.get('http://the-internet.herokuapp.com/dynamic_controls');

driver.findElement(By.css('form#input-example > button[type="button"]')).click();

driver.wait(until.elementIsEnabled(driver.findElement(By.css('form#input-example > input[type="text"]'))),5000);
driver.findElement(By.id('message')).then(function(text){
    text.getText().then(function(txt){
        console.log('message reads \"' + txt + '\".');
    });
});


driver.quit();