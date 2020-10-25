var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var untill = webdriver.until;
var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('http://the-internet.herokuapp.com/notification_message_rendered');

driver.findElement(By.css('div#content a')).click();

var message = driver.findElement(By.css('div#flash'));

driver.wait(function(){
    return message.getText().then(function(msg){
        return msg === 'Action successful'
    });
},15000);
