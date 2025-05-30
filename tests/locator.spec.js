import {test , expect} from '@playwright/test';

test(' Locators Check ', async ({page}) => {
    await page.goto('https://demoblaze.com/index.html');

    // provide username by using id locator by using type method
    // await page.locator('#loginusername').fill('pavanol');
    // await page.type('#loginusername', 'pavanol');

    // provide username by using css selector by fill method
    // await page.locator('input[id="loginusername"]').fill('pavanol');
    // await page.fill('input[id="loginusername"]', 'pavanol');

    // provide username by using xpath
    //await page.locator('//input[@id="loginusername"]').fill('pavanol');

    // provide username by using text selector
    // await page.locator('input:text("loginusername")').fill('pavanol');

    // provide username by using text selector with css
    // await page.locator('input:text("loginusername")').fill('pavanol');
    await page.click('//a[text()="Log in"]');
    await page.locator('[id="loginusername"]').fill('pavanol');
    await page.locator('//input[@id="loginpassword"]').fill('test@123');
    await page.click('//button[text()="Log in"]');
     const logout = await page.locator('[id="logout2"]');
     await expect(logout).toBeVisible();
})

test ('Locate Multiple Element in multiple links ', async ({page}) => {
        await page.goto('https://demoblaze.com/index.html');
       const links =  await page.$$('a');
        for(const link of links ) {
            const linkText = await link.textContent();
            console.log(linkText);
        }
})

test.only ('Multiple product name ',async ({page}) => {
    await page.goto('https://demoblaze.com/index.html');
    // wait for selector fully loade
    await page.waitForSelector('//div[@id="tbodyid"]//div//h4/a');
    const products = await page.$$('//div[@id="tbodyid"]//div//h4/a');

    for(const product of products){
       const prod =  await product.textContent();
       console.log(prod);
    }
})