import { test, expect } from '@playwright/test';

test ('Built in locator', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // page.getByAltText() - locate an element especially img by its text alternative
    const img = await page.getByAltText('company-branding');
    await expect(img).toBeVisible();

    // page.getByPlaceholder() - input by placeholder
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    console.log("this is sample")
    //this is test

    // page.getByLabel - used in input box form control
   // await page.getByLabel('Username').fill('Admin');

    //page.getByRole() - locate implicit and explicit access attribute
    await page.getByRole('button', {type: "submit"}).click();

    // page.getByText() - locate by text content
    const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();
    await expect(await page.getByText(name)).toBeVisible();
    //await expect(await page.getByText('RagunathhJohnJohn P DoeDoe')).toBeVisible();


});