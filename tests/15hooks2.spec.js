import {test, expect, chromium} from '@playwright/test';
let browser;
let context;
let page;

test.beforeAll(async () => {
     browser = await chromium.launch();
     context = await browser.newContext();
     page = await context.newPage();

    await page.goto('https://demoblaze.com/');
    await page.click('[id="login2"]');
    await page.fill('[id="loginusername"]','pavanol');
    await page.fill('[id="loginpassword"]','test@123');
    await page.click('//button[normalize-space()="Log in"]');
})

test.afterAll(async ()=>{
    await page.click('[id="logout2"]');
})

test(' Login and logout ', async () => {
    const products = await page.$$('.hrefch');
    expect(products).toHaveLength(9);
})

test('Login', async () => {
    await page.click('//a[text()="Samsung galaxy s6"]');

    page.on('dialog',async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    })
    await page.click('//a[@class="btn btn-success btn-lg"]');
    await page.click('[id="cartur"]');
})