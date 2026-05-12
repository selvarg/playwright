//web tables
import{test, expect} from '@playwright/test'
test('product search',async({page})=>{
  await page.goto("https://demoqa.com/");
  await page.locator("//h5[text()='Elements']").click()
  await page.click('//a[@class="router-link"]/descendant::span[text()="Web Tables"]')
  await page.click("#edit-record-2")
  await page.locator('//input[@placeholder="First Name"]').fill("selva")
  await page.locator('//input[@placeholder="Last Name"]').fill("Ganesh")
  await page.locator('//input[@placeholder="name@example.com"]').fill('sg@gmail.com')
  await page.locator('//input[@placeholder="Age"]').fill('28');
  await page.locator('//input[@placeholder="Salary"]').fill('25000')
  await page.locator('//input[@placeholder="Department"]').fill('civil')
  await page.locator('#submit').click()
  const rows = await page.locator('//table/tbody/tr');
  console.log(await rows.count());

  for(let i=0;i<await rows.count();i++){
    const data = await rows.nth(i).innerText();
    //console.log(data);


    if (data.includes("selva")){
      //await rows.locator('td').nth(4).innerText();
      console.log(data)
      break;
    }

  }

})