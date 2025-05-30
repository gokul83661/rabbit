import{test, expect} from '@playwright/test';
import { join } from 'path';

test('Mouse Hover check Action ', async ({page})=> {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const point = await page.locator('[class="dropbtn"]');
    const laptop = await page.locator('//a[normalize-space()="Laptops"]');
    await point.hover();
    await laptop.hover();
    await page.waitForTimeout(3000);

})

test ('Right click button  Action ', async ({page})=> {
    await page.goto('https://cpstest.org/right-click-test.php');
    const btn = await page.locator('//button[@id="start"]');
    await btn.click({button: 'right'});
    await page.waitForTimeout(2000);
})

test.only ('Double click action perform ', async ({page})=> {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const btn = await page.locator('//button[normalize-space()="Copy Text"]');
    await btn.dblclick();
    await page.waitForTimeout(2000);
})