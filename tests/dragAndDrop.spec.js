import {test, expect} from '@playwright/test';

test ('1) Drag elemnt and drop another place', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const pick = await page.locator('[id="draggable"]');
    const drop = await page.locator('[id="droppable"]');

    await pick.dragTo(drop);
    await page.waitForTimeout(2000);
    
})

test.only ('2) Drag and drop elements', async ({page}) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
    const oslo = await page.locator('[id="box1"]');
    const norway = await page.locator('[id="box101"]');
    await oslo.dragTo(norway);
    await page.waitForTimeout(2000);
})