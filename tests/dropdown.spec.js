import {test , expect} from '@playwright/test';
import { count } from 'console';

test ('Handle DropDown selection Methods ', async ({page}) => {
                     // multiple way to select option in dropdown list
    await page.goto('https://testautomationpractice.blogspot.com/');
    //await page.locator('//label[@for="country"]').selectOption({value: "india"});  // use attribute
    //await page.locator('//label[@for="country"]').selectOption('India');  // use visible text
    //await page.locator('//label[@for="country"]').selectOption({label: "India"});  // use label
    //await page.locator('//label[@for="country"]').selectOption({index: 3});  // use index
    //await page.selectOption('//label[@for="country"]','India');

    /*
    //check no. of option in dropdown list
    const option = await page.locator('[id="country"] option');
    await expect(option).toHaveCount(10);
    */

    /*
    // check no of option in dropdown
    const number = await page.$$('#country option');
    console.log(number.length);
    */

    /*
    // check dropdown text contain 
    const content = await page.locator('#country').textContent();
    await expect(content.includes('India')).toBeTruthy();
    */
    
})

test ('Handle multiselected drop down', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    // await page.selectOption('[id="colors"]',['Red','Blue','Green']);
    // await page.waitForTimeout(2000);

    /*
    // Assertions
    // check no. of selector in dropdown
    const options = await page.locator('[id="colors"] option');
    await expect(options).toHaveCount(7);
    */


    /*
    // check no. of selector in dropdown using array
    // const num = await page.$$('[id="colors"] option');
    // console.log(num.length);
    */

    /*
    // check presence of value
   const color = await page.locator('[id="colors"]').textContent(); 
   await expect(color.includes('Red')).toBeTruthy();
    */

})

test('Auto suggetion dropdown list show in terminal ', async ({page}) => {
    await page.goto('https://www.redbus.in/');
    await page.fill('input[id="src"]','Delhi');
    await page.waitForSelector('//li/div/text[1]');
    const cityName = await page.$$('//li/div/text[1]');

    for(let city of cityName) {
        const value = await city.textContent();
        console.log(value);
    }
})

test ('Auto suggetion dropdown list show ', async ({page}) => {
    await page.goto('https://www.redbus.in/');
    await page.fill('input[id="src"]','Delhi');
    await page.waitForSelector('//li/div/text[1]');
    const cityName = await page.$$('//li/div/text[1]');

    for(let city of cityName) {
        const value = await city.textContent();
        if(value == 'Mayur Vihar')
        {
            await city.click();
            break;
        }
    }
    await page.waitForTimeout(3000);
})


test.only ('Hidden dropdown list ', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('[name="username"]').fill('Admin');
    await page.locator('[name="password"]').fill('admin123');
    await page.locator('[type="submit"]').click();
    await page.click(' //span[normalize-space()="PIM"]');



})