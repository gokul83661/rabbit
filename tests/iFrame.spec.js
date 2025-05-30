import {test, expect} from '@playwright/test';

test(' Handle iframes ', async ({page})=> {
    await page.goto('https://ui.vision/demo/webtest/frames/');

    // in frame use url. in url right click on url copy address
    const frame1 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2.html'});
    await frame1.fill('input[name="mytext2"]','Welcome');

    // frameLocator 
    const inputBox = page.frameLocator('frame[src="frame_1.html"]').locator('[name="mytext1"]');
    await inputBox.fill('Hello');
})

// some issu in this test
test (' Handle iframe', async ({page})=> {
    await page.goto('https://ui.vision/demo/webtest/frames/');

   const nestFrame = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
   const childF = await nestFrame.childFrames();
   await childF[0].locator('//frameset//frameset//frame[2]]').check();

})