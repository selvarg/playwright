// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://www.flipkart.com/');
//   await page.locator('div').filter({ hasText: '✕LoginGet access to your' }).first().click();
//   await page.getByRole('button', { name: '✕' }).click();
//   await page.getByRole('textbox', { name: 'Search for Products, Brands' }).click();
//   await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('mobiles');
//   await page.getByRole('textbox', { name: 'Search for Products, Brands' }).press('Enter');
//   await page.getByRole('link', { name: 'mobiles under' }).click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('link', { name: 'vivo T5x 5G (Cyber Green, 128' }).click();
//   const page1 = await page1Promise;
//   await page1.locator('.css-g5y9jx > div:nth-child(2) > ._1psv1zeb9 > div > div > div:nth-child(2)').click();
// });

// import { test, expect } from '@playwright/test';

// test('Myntra min price product', async ({ page }) => {
//   await page.goto('https://www.myntra.com/kids-tshirts');

//   await page.waitForSelector('.product-base');

//   const products = page.locator('.product-base');
//   const count = await products.count();

//   let minPrice = Number.MAX_VALUE;
//   let minProductName = '';

//   for (let i = 0; i < count; i++) {
//     const product = products.nth(i);

//     const name = await product.locator('.product-product').textContent();

//     // ✅ Try discounted price first
//     let priceText;

//     const discounted = product.locator('.product-discountedPrice');
//     const original = product.locator('.product-price');

//     if (await discounted.count() > 0) {
//       priceText = await discounted.first().textContent();
//     } else if (await original.count() > 0) {
//       priceText = await original.first().textContent();
//     } else {
//       continue; // skip if no price found
//     }

//     const price = parseInt(priceText.replace(/[^0-9]/g, ''));

//     if (price < minPrice) {
//       minPrice = price;
//       minProductName = name;
//     }
//   }

//   console.log('Minimum price:', minPrice);
//   console.log('Product name:', minProductName);
// });

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.myntra.com/');
  await page.getByRole('link', { name: 'T-Shirts', exact: true }).click();
  await page.locator('.colour-listItem > .common-customCheckbox > .common-checkboxIndicator').first().click();
  await page.locator('#rootRailThumbRight').click();
  await page.locator('#rootRailThumbRight').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'U.S. Polo Assn. Kids Boys' }).click();
  const page1 = await page1Promise;
  await page1.getByText('ADD TO BAG').click();
  await page1.getByRole('button', { name: '-5Y' }).click();
  await page1.getByText('ADD TO BAG').click();
  await page1.getByText('Added to bag').click();
  await page1.locator('#desktop-header-cnt').getByText('1').click();
  await page1.getByRole('button', { name: 'PLACE ORDER' }).click();
});