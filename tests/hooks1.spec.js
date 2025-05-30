import {test, expect} from '@playwright/test';

test(' Login and logout ', async ({page}) => {
    await page.goto('https://demoblaze.com/');
    await page.click('[id="login2"]');
    await page.fill('[id="loginusername"]','pavanol');
    await page.fill('[id="loginpassword"]','test@123');
    await page.click('//button[normalize-space()="Log in"]');

    const products = await page.$$('.hrefch');
    expect(products).toHaveLength(9);
    await page.click('[id="logout2"]');
})

test.only(' Login', async ({page}) => {
    await page.goto('https://demoblaze.com/');
    await page.click('[id="login2"]');
    await page.fill('[id="loginusername"]','pavanol');
    await page.fill('[id="loginpassword"]','test@123');
    await page.click('//button[normalize-space()="Log in"]');

    await page.click('//a[text()="Samsung galaxy s6"]');

    page.on('dialog',async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    })
    await page.click('//a[@class="btn btn-success btn-lg"]');
    await page.click('[id="cartur"]');
    await page.click('[id="logout2"]');
})