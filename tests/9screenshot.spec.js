import {test, expect} from '@playwright/test';

test('Page Screenshot', async ({page})=> {
    await page.goto('https://demoblaze.com/');
    await page.screenshot({path: 'tests/screenshot/HomePage.png'});
})
test('Full Page Screenshot', async ({page})=> {
    await page.goto('https://demoblaze.com/');
    await page.screenshot({path: 'tests/screenshot/FullPage.png',fullPage: true});

})
test('Selected Element Screenshot', async ({page})=> {
    await page.goto('https://demoblaze.com/');
    const element = await page.locator('[class="col-lg-4 col-md-6 mb-4"]').first();
    await element.screenshot({path: 'tests/screenshot/ElementPage.png'});

})