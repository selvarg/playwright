import { test } from '@playwright/test'; // ES module
// const { test } = require(play); // Common Js module

test('launching the url', async ({ page }) => {
    await page.goto('https://www.facebook.com');
    await page.waitForTimeout(3000);
    await page.goto('https://www.instagram.com');
    await page.waitForTimeout(2000);
    await page.goBack();
    await page.goForward();
    await page.reload();
})