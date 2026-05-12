import { test, expect } from '@playwright/test';

test('Myntra product count and prices', async ({ page }) => {
  await page.goto('https://www.myntra.com/kids-tshirts');

  await page.waitForSelector('.product-base');

  // 1. Count products
  const products = page.locator('.product-base');
  const count = await products.count();
  console.log('Total products on first page:', count);

  // 2. Get all prices
  const prices = page.locator('.product-discountedPrice');
  const priceCount = await prices.count();

  let minPrice = Number.MAX_VALUE;

  for (let i = 0; i < priceCount; i++) {
    const priceText = await prices.nth(i).textContent();

    // Remove ₹ and convert to number
    let minPrice = Number.MAX_VALUE;

for (let i = 0; i < priceCount; i++) {
  const element = prices.nth(i);

  if (await element.isVisible()) {
    const priceText = await element.textContent();
    const price = parseInt(priceText.replace(/[^0-9]/g, ''));

    console.log(`Product ${i + 1} price:`, price);

    if (price < minPrice) {
      minPrice = price;
    }
  }
}

console.log('Minimum price:', minPrice);
  }

});
// test('add to cart',async({page})=>{
//   await page.goto("https://www.amazon.in/");
//   await page.locator("input#twotabsearchtextbox").fill("camera");
//   await page.locator("input#nav-search-submit-button").click();
//   //await page.locator("//span[contains(text(),'vivo V70 FE 5G')]/ancestor::div[@class='puisg-col-inner']//button[@aria-label='Add to cart']").click()
//   await page.locator('//span[text()="CP PLUS 4MP Quad HD Smart Wi-Fi CCTV Camera for Home | 360° Pan & Tilt | CTC Cyber Secure Tech | Supports LAN | View & Talk | Smart Detection Suite | Night Vision | Cloud Storage | OK Google | CP-E41Q"]').click()
//   await page.waitForSelector("//span[@id='submit.add-to-cart-announce']");
//   await page.locator("//span[@id='submit.add-to-cart-announce']").click();
//   await page.locator("span#attachSiNoCoverage-announce").click();
//   const res = await page.locator("div#NATC_MWEB_FULL_PAGE_CONF_MSG_SUCCESS")
//   console.log(res.textContent());
//   await page.waitForTimeout(5000);

// })

// test('add to cart', async ({ page }) => {

//   await page.goto("https://www.amazon.in/");

//   await page.fill("#twotabsearchtextbox", "camera");
//   await page.click("#nav-search-submit-button");

//   // click product + capture new tab
//   const [newPage] = await Promise.all([
//     page.context().waitForEvent('page'),
//     page.locator('//span[contains(text(),"CP PLUS")]').first().click()
//   ]);
//   // wait for new tab to load
//   await newPage.waitForLoadState();
// await newPage.pause();
//   // click add to cart
//    const popup=await newPage.locator('//input[@id="add-to-cart-button"]')
// await popup.waitFor();
// await popup.click()

//    const  frame= await newPage.locator('//input[@aria-labelledby="attachSiNoCoverage-announce"]')
// await frame.waitFor({ state: 'visible' });
// await frame.click();
//   // get confirmation text
//   const res = await newPage.locator('//h4[normalize-space(text())="Added to cart"]').innerText();

//   console.log("confirm:",res);

// });
