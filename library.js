var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var driver = new webdriver.Builder().forBrowser('chrome').build();



driver.get('https://library-app.firebaseapp.com');
driver.findElement(By.css('input')).sendKeys('blahblah@email.com');

driver.findElement(By.css('.btn-primary')).click();

driver.wait(until.elementLocated(By.css('.alert-success')), 5000).getText().then(function(txt){
    console.log(txt);
})

driver.quit().then(function(){
    console.log('The code has ran completely');
});