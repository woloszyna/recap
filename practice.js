var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('http://the-internet.herokuapp.com/dynamic_controls');

//Block to train the elementIsEnabled elementIsDisabled explicit wait methods.
driver.findElement(By.css('form#input-example > button[type="button"]')).click();
driver.wait(until.elementIsEnabled(driver.findElement(By.css('form#input-example > input[type="text"]'))), 5000).sendKeys('blahblahblah');

driver.findElement(By.css('form#input-example > button[type="button"]')).click();
driver.wait(until.elementIsDisabled(driver.findElement(By.css('form#input-example > input[type="text"]'))),5000);


driver.findElement(By.css('form#input-example > button[type="button"]')).click();
driver.wait(until.elementIsEnabled(driver.findElement(By.css('form#input-example > input[type="text"]'))), 5000).clear();

driver.findElement(By.css('form#input-example > button[type="button"]')).click();
driver.wait(until.elementIsDisabled(driver.findElement(By.css('form#input-example > input[type="text"]'))), 5000);

driver.findElement(By.css('form#input-example > button[type="button"]')).click();
driver.wait(until.elementIsEnabled(driver.findElement(By.css('form#input-example > input[type="text"]'))), 5000).sendKeys('This Time it has to be a pass');
//End of block to train the elementIsEnabled elementIsDisabled explicit wait methods.


//Block to train elementIsNotSelected elementIsSelected explicit wait methods.
driver.findElement(By.css('#checkbox > input[type=checkbox]')).click();
driver.wait(until.elementIsSelected(driver.findElement(By.css('#checkbox > input[type=checkbox]'))), 5000).then(function(){
    console.log('checkbox checked');
});

driver.findElement(By.css('#checkbox > input[type=checkbox]')).click();
driver.wait(until.elementIsNotSelected(driver.findElement(By.css('#checkbox > input[type=checkbox]'))), 5000).then(function(){
    console.log('checkbox un-checked');
});

driver.findElement(By.css('#checkbox > input[type=checkbox]')).click();
driver.wait(until.elementIsSelected(driver.findElement(By.css('#checkbox > input[type=checkbox]'))), 5000).then(function(){
    console.log('checkbox checked again');
});
//End of block to train elementIsNotSelected elementIsSelected explicit wait methods.

driver.navigate().refresh();

//Block to train elementIsVisible elementIsNotVisible explicit wait methods.
driver.findElement(By.css('form#checkbox-example > button[type="button"]')).click().then(function(){
    console.log('checkbox is not visible');
});

driver.findElement(By.css('form#checkbox-example > button[type="button"]')).click();
driver.wait(until.elementIsVisible(driver.findElement(By.id('checkbox'))),5000).then(function(){
    console.log('checkbox is visible');
});

driver.findElement(By.css('form#checkbox-example > button[type="button"]')).click().then(function(){
    console.log('checkbox is not visible');
});

driver.findElement(By.css('form#checkbox-example > button[type="button"]')).click();
driver.wait(until.elementIsVisible(driver.findElement(By.id('checkbox'))),5000).then(function(){
    console.log('checkbox is visible again');
});
//End of block to train elementIsVisible elementIsNotVisible explicit wait methods.

//Block to train elementTextIs explicit wait methods.


//End of block to train elementTextIs explicit wait methods.


//Block to train xxx xxx explicit wait methods.
//End of block to train xxx xxx explicit wait methods.
/*
//Cleanup, bring the page to it's initial state
driver.findElement(By.css('form#input-example > input[type="text"]')).clear();
driver.findElement(By.css('#checkbox > input[type=checkbox]')).click();

driver.quit().then(function(){
    console.log('The code has ran completely');
});
*/