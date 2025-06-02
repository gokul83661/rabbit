import {test, expect } from '@playwright/test';

test('In Text box fill date', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.fill('[id="datepicker"]','05/24/26');
    await page.waitForTimeout(5000);
})

test.only ('Choose date in text column', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.click('[id="datepicker"]');

    const year = "2020";
    const month = "August";
    const date = "5";

    while(true)
    {
        const currentMon = await page.locator('[class="ui-datepicker-month"]').textContent();
        const currentYear = await page.locator('[class="ui-datepicker-year"]').textContent();

        if(currentYear == year &&  currentMon == month) 
        {
            break;
        }
        //await page.click('[title="Next"]'); // check future months
        await page.click('[title="Prev"]');  // check previous months 
    }

    const dates = await page.$$('//a[@class="ui-state-default"]');

    // 1) date selection without loop 
   // await page.click(`//a[@class="ui-state-default"][text()="${date}"]`);

    // 2) date selection with loop
    for(const dt of dates){
        if(await dt.textContent()== date){
            await dt.click();
            break;
        }
    }
    await page.waitForTimeout(3000);
})