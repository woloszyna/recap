var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('https://library-app.firebaseapp.com');


var submitBtn = driver.findElement(By.css('.btn-primary'));
driver.findElement(By.css('input')).sendKeys('blahblahemail.com');


driver.wait(function(){
    return submitBtn.isEnabled();
},5000);


submitBtn.click();

driver.wait(until.elementLocated(By.css('.alert-success')), 5000).getText().then(function(txt){
    console.log(txt);
});




driver.quit().then(function(){
    console.log('The code has ran completely');
});
