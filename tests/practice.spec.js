//using id
import{test,expect} from '@playwright/test'
test('login',async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html");
    await page.locator("a#login2").click(); //by id
    await page.locator("input#loginusername").fill("pavanol");
    await page.locator("input#loginpassword").fill("test@123");
    await page.locator('//button[text()="Log in"]').click();
    await page.waitForTimeout(5000);
    await page.locator("a#logout2");
    await page.screenshot({path:'demoblaze.png'});



})

test('locators',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('//input[@name="username"]').fill("Admin");
    await page.locator('//input[@placeholder="Password"]').fill("admin123");
    await page.locator('//button[contains(@class,"oxd-button")]').click();


})

test('insta',async({page})=>{
    await page.goto("https://www.instagram.com/");
    await page.locator("input#_R_32d9lplkldcpbn6b5ipamH1_").fill("sel4309");
    await page.locator("input#_R_33d9lplkldcpbn6b5ipamH1_").fill("sel4309");
    await page.click("//span[text()='Log in']")

})
