import {test, expect} from '@playwright/test';

//Handle Table data
test('1) print  total no. of columns and rows inside console ',async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = await page.locator('[id="productTable"]');

    // Columns
    const column = await table.locator('thead tr th');
    console.log('Total column is: ',await column.count());

    // Rows
    const row = await table.locator('tbody tr');
    console.log('Total no of row: ', await row.count());  
})

test ('2) Select single product',async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = await page.locator('[id="productTable"]');

    const column = await table.locator('thead tr th');
    const row = await table.locator('tbody tr');

    // select checkbox of product 4
     const rowMatch = row.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'
     })
     await rowMatch.locator('input').check();
     await page.waitForTimeout(3000);
})

test ('3) Select multiple Data (Checkbox) ',async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = await page.locator('[id="productTable"]');
 
    const column = await table.locator('thead tr th');
    const row = await table.locator('tbody tr');

    // 3)  select multiple checkbox in table
     await selectProduct(row, page, 'Smartphone');
     await selectProduct(row, page, 'Tablet');
     await selectProduct(row, page, 'Smartwatch');
})
async function selectProduct(row, page, name)
{
    const product = row.filter({
        has: page.locator('td'),
        hasText: name
    })
    await product.locator('input').check();
}


test ('4) Print all Table data using loop ',async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('[id="productTable"]');
    const columns = await table.locator('thead tr th');
    const rows = await table.locator('tbody tr');
    

    for(let i=0; i<await rows.count();i++)
        {
        const row = rows.nth(i);
        const tds = row.locator('td');

        for(let j=0;j<await columns.count()-1;j++){
            console.log(await tds.nth(j).textContent());
        }
    }
})

test.only('5) Print all pages Data', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('[id="productTable"]');
    const columns = await table.locator('thead tr th');
    const rows = await table.locator('tbody tr');
    
    const pages = await page.locator('.pagination li a');
    console.log(`Total no of pages is ${await pages.count()}`); 


    for(let p=0; p<await pages.count(); p++) 
    {
        if(p>0){
               await pages.nth(p).click();
        }
        for(let i=0; i<await rows.count();i++)
        {
        const row = rows.nth(i);
        const tds = row.locator('td');

            for(let j=0;j<await columns.count()-1;j++){
            console.log(await tds.nth(j).textContent());
            }
            
        }
        await page.waitForTimeout(2000);
    }
})

