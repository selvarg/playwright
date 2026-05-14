// import{test, expect} from '@playwright/test'

// test('product count',async({page})=>{
//     await page.goto("https://www.amazon.in/");
//     await page.locator('//input[@placeholder="Search Amazon.in"]').fill('chandelier');
//     await page.locator('//input[@type="submit"][1]').click()

//     await page.waitForSelector('[data-component-type="s-search-result"]');
//     const products = page.locator('[data-component-type="s-search-result"]');
//     const count = await products.count();
//     console.log("Product count:", count);

//     for (let i = 0; i < count; i++) {
//     const product = products.nth(i);

//     const title = await product.locator('h2 span').textContent();

//     console.log(`Product ${i + 1}:`, title);
//   }
// });
