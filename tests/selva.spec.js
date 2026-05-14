// import{test,expect} from '@playwright/test'
// test('login',async({page})=>{
//     await page.goto("https://www.flipkart.com/");
//     const searchBox = page.getByPlaceholder('Search for Products, Brands and More').first();
//     await searchBox.fill('vacuum cleaner');
//     await page.locator('//button[@class="XFwMiH"]').first().click();
//     await page.locator("//div[text()='AGARO Regal Hand-held Vacuum Cleaner Dry Vacuuming, 6.5 kPa Suction Power, Lightweight,�for Home Use &...']").click();
//     await page.locator("//div[text()='Add to cart']").click()
//     await page.waitForTimeout(5000);




// })

// test('flipkart add to cart', async ({ page, context }) => {

//   await page.goto("https://www.flipkart.com/");

//   // Search product
//   const searchBox = page.getByPlaceholder('Search for Products, Brands and More').first();
//   await searchBox.fill('vacuum cleaner');
//   await searchBox.press('Enter');

//   // Wait for products
//   await page.waitForSelector('a[target="_blank"]');

//   // Click product → opens new tab
//   const [newPage] = await Promise.all([
//     context.waitForEvent('page'),
//     page.locator('a[target="_blank"]').first().click()
//   ]);

//   // Wait for new tab
//   await newPage.waitForLoadState('domcontentloaded');

//   // Click Add to Cart (CORRECT locator)
//   await page.locator("//div[text()='Add to cart']").click()

//   // Optional wait
//   await newPage.waitForTimeout(9000);

// });