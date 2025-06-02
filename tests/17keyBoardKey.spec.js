import {test, expect} from '@playwright/test';

test ('Copy text and paste by using keyboard keys', async ({page}) => {
    await page.goto('https://text-compare.com/');
    await page.fill('[id="inputText1"]','Welcome! This is playwright.');
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.down('Tab');
    await page.keyboard.press('Control+V');
}) 