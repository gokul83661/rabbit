import { test , expect}  from '@playwright/test';

test('assertions', async ({page}) => {
    //await page.goto('https://demo.nopcommerce.com/');

    //await expect(page).toHaveURL('https://demo.nopcommerce.com/');
    //await expect(page).toHaveTitle('nopCommerce demo store. Home page title');

   /* 
   const img = await page.getByAltText('nopCommerce demo store');
    await expect(img).toBeVisible();
     */

    /*
     const textBox = await page.locator('[id="small-searchterms"]');
    await expect(textBox).toBeEnabled();
     */

    /*
    
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');
    const radioBtnMale = await page.locator('[id="gender-male"]');
    await radioBtnMale.click();
    await expect(radioBtnMale).toBeChecked();
    
    const newsLetter = await page.locator('[id="Newsletter"]');
    await expect(newsLetter).toBeChecked(); 
    
    */

   /*
   
   await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');
    // const reg = await page.locator('[id="register-button"]');
    // await expect(reg).toHaveAttribute('type','submit');

    // await expect(page.locator('.page-title h1')).toHaveText('Register');   //full text exact same text
    // await expect(page.locator('.page-title h1')).toContainText('Regi');  // partially same text 

     const username = await page.locator('[id="FirstName"]');
     await username.fill('admin');
     await expect(username).toHaveValue('admin');
     
     */

     /*
        // Use dropdown list for toHaveCount()
     await page.goto('https://practice.expandtesting.com/dropdown');
     const drop = await page.locator('select[id="dropdown"] option');
    await expect(drop).toHaveCount(3);
    
    */
});