import {test, expect } from '@playwright/test';


test ('Hard and soft', async ({page}) => {
    await page.goto('https://demo.nopcommerce.com/');
   // await expect(page.getByAltText('nopCommerce demo store')).toBeVisible();
    await expect.soft(page.getByAltText('nopCommerce demo store')).toBeVisible();
    await expect.soft(page).toHaveTitle('nopCommerce demo store. Home page title123');   
})