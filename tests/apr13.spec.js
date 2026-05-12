// import{test, expect} from '@playwright/test'

// test('handling dropdown and record video',async({page,context})=>{
//   //in-build fixtures
//   //browser
//   //context -->Context controls environment // Context = browser session
//   //page --> Page interacts with UI //Page = browser tab

// // Browser = Chrome
// // Context = Incognito window
// // Page = Tab inside that window

//   const browser= await chromium.launch();
//   const context= await browser.newContext({
//     recordVideo:{
//       dir: 'recorder/'
//     }
//   });
//   const page = await context.newPage();
//   //selectOption()->handle dropdown
//   //index
//   await page.goto("https://www.hyrtutorials.com/p/html-dropdown-elements-practice.html")
//     //value
//   await page.selectOption('#course',{value:'net'})
//   await page.waitForTimeout(2000);

//   //lable
//     await page.selectOption('#course',{lable:'Javascript'})
//     await page.waitForTimeout(2000);

//     //index
//     await page.selectOption('#course',{index:1})
//     await page.waitForTimeout(2000);

//     await page.selectOption('#ide',['ec','ij','vs'])
//     await page.waitForTimeout(2000);


// })

// test('locators',async({page})=>{
//   await page.goto('https://testautomationcentral.com/demo/dropdown.html')
//   await page.selectOption('select.form-select',{index:1})

// })

// //task- learn how to handle new tab, popup, and getting locator from parent, and storing in a variable

// import { test, expect } from '@playwright/test';

// test('handling dropdown and record video', async ({ page, context }) => {

//   // Enable video recording via config OR override context
//   await page.goto("https://www.hyrtutorials.com/p/html-dropdown-elements-practice.html");

//   // value
//   await page.selectOption('#course', { value: 'net' });
//   await page.waitForTimeout(2000);

//   // label (spelling fix!)
//   await page.selectOption('#course', { label: 'Javascript' });
//   await page.waitForTimeout(2000);

//   // index
//   await page.selectOption('#course', { index: 1 });
//   await page.waitForTimeout(2000);

//   // multi-select
//   await page.selectOption('#ide', ['ec', 'ij', 'vs']);
//   await page.waitForTimeout(2000);

// });


import { test, expect, chromium } from '@playwright/test';

test('handling dropdown and record video', async () => {

  // Launch browser manually
  const browser = await chromium.launch();

  // Create context with video recording
  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/',   // folder where video will be saved
      size: { width: 1280, height: 720 }
    }
  });

  const page = await context.newPage();

  await page.goto("https://www.hyrtutorials.com/p/html-dropdown-elements-practice.html");

  // value
  await page.selectOption('#course', { value: 'net' });
  await page.waitForTimeout(2000);

  // label
  await page.selectOption('#course', { label: 'Javascript' });
  await page.waitForTimeout(2000);

  // index
  await page.selectOption('#course', { index: 1 });
  await page.waitForTimeout(2000);

  // multi-select
  await page.selectOption('#ide', ['ec', 'ij', 'vs']);
  await page.waitForTimeout(2000);

  await context.close();   // important → saves video
  await browser.close();
});