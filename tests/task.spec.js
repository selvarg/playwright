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

// });
