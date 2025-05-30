import {test, expect} from '@playwright/test';

test('1) Upload single file ', async ({page}) => {
    await page.goto('https://practice.expandtesting.com/upload');
    await page.locator('[id="fileInput"]').setInputFiles('D:/Playwright.txt');
    await page.waitForTimeout(3000);

})

test ('2) Upload multiple files', async ({page}) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator('[id="filesToUpload"]').setInputFiles(['D:/Playwright1.txt','D:/Playwright2.txt']);
    const fileNames = await page.locator('//ul[@id="fileList"]/li').textContent();
    console.log(fileNames);

    await page.waitForTimeout(3000);
})

// test run successfully but files name not print
test.only('3) Upload multiple files loop', async ({page}) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator('[id="filesToUpload"]').setInputFiles(['D:/Playwright1.txt','D:/Playwright2.txt']);
    const fileName = await page.$$('//ul[@id="fileList"]/li');

    for(const fileN of fileName) {
        console.log(await fileN.textContent());
    }

    await page.waitForTimeout(3000);
})