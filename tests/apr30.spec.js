// import { test, expect, chromium } from '@playwright/test';
// test.only('Handling windows in playwright', async () => {
//     const browser = await chromium.launch({ headless: true });
//     const context = await browser.newContext();
//     const page = await context.newPage();

//     await page.goto('https://www.amazon.in');
//     await page.fill('[id="twotabsearchtextbox"]', 'mobile phones');
//     await page.keyboard.press('Enter');

//     const [newTab] = await Promise.all([
//         context.waitForEvent('page'),
//         page.click('(//div[@data-cy="title-recipe"])[1]')
//     ])

//     await newTab.waitForLoadState();
//     await newTab.click('(//input[@id="add-to-cart-button"])[2]');

//     const tabs = await context.pages();

//     const youtube = tabs[1];
// })