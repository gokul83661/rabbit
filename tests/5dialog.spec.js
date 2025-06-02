import {test, expect } from '@playwright/test';

test ('Alert message show ', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })
    await page.click('button[id="alertBtn"]');
})

test ('Confirmation msg show  ', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();
        //dialog.dismiss();
    })
    await page.click('[id="confirmBtn"]');
    await expect(page.locator('p[id="demo"]')).toHaveText('You pressed OK!');
})

test ('Prompt dialog to write msg', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('John');
    })
    await page.click('button[id="promptBtn"]');
    await expect(page.locator('[id="demo"]')).toHaveText('Hello John! How are you today?');
})