
import {test, expect } from '@playwright/test';

test('Input box ', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await expect(page.locator('//input[@id="name"]')).toBeVisible();
    await expect(page.locator('//input[@id="name"]')).toBeEmpty();
    
    await page.fill('//input[@id="name"]', 'User');
    await page.waitForTimeout(2000);
   
})

test('radio', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('//input[@value="male"]').check();
    await expect(await page.locator('//input[@value="male"]')).toBeChecked();


})

test('checkbox', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    // await page.locator('//input[@id="sunday" and @type="checkbox"]').check();
    // await page.locator('//input[@id="monday" and @type="checkbox"]').check();
    // await page.locator('//input[@id="friday" and @type="checkbox"]').check();
    // await expect(page.locator('//input[@id="friday" and @type="checkbox"]')).toBeChecked();


    // multiple checkbox
    const checkboxLocators= [
        '//input[@id="sunday" and @type="checkbox"]',
        '//input[@id="monday" and @type="checkbox"]',
        '//input[@id="friday" and @type="checkbox"]',
        '//input[@id="saturday" and @type="checkbox"]'
    ]

    for(const checkLoc of checkboxLocators)  // select multiple checkbox
    {
        await page.locator(checkLoc).check();
    }
     for(const checkLoc of checkboxLocators)  // first check  checkbox then uncheck
    {
        if(await page.locator(checkLoc).isChecked()){
        await page.locator(checkLoc).uncheck();
        }
    }
    await page.waitForTimeout(2000);
})

test.only('Dropdown', async ({page}) => {
    // multiple way to select option in dropdown list
    await page.goto('https://testautomationpractice.blogspot.com/');
    //await page.locator('//label[@for="country"]').selectOption({value: "india"});  // use attribute
    //await page.locator('//label[@for="country"]').selectOption('India');  // use visible text
    //await page.locator('//label[@for="country"]').selectOption({label: "India"});  // use label
    //await page.locator('//label[@for="country"]').selectOption({index: 3});  // use index
    //await page.selectOption('//label[@for="country"]','India');

    //check no. of option in dropdown list
    const option = await page.locator('[id="country"] option');
    await expect(option).toHaveCount(10);

// check no of option in dropdown
    const number = await page.$$('#country option');
    console.log(number.length);

    // check dropdown text contain 
    const content = await page.locator('#country').textContent();
    await expect(content.includes('India')).toBeTruthy();
    
})