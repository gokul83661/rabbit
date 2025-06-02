import {test, expect} from '@playwright/test';

test (' Check Title ', async ({page}) => {
    await page.goto('https://demoblaze.com/');
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://demoblaze.com/');
    console.log("this is demo logger for code rabbit")
})