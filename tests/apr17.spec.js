//Pop-up handling
import{test, expect} from '@playwright/test'

test('popup',async({page})=>{
    //types of alerts
    //simple alert -> 'ok'
    //confirm alert -> 'ok' and 'cancel'
    //prompt alert -> 'text box'

    //message() -> to get the text in tthe dialog box
    //type() -> to find out the type of the alert
    //accept() ->  to press 'ok'
    //dismiss -> to press 'cancel'

page.on('dialog',(dialog)=>{ //page.once executes only one popup if we need to handle multiple pop up we can use page.on
    console.log(dialog.message())
    console.log(dialog.type());
    dialog.accept('selva')

    
})
    await page.goto('https://demoqa.com/alerts')
    await page.click("button#alertButton")
    await page.waitForTimeout(3000)
    await page.click("button#confirmButton")
    await page.waitForTimeout(3000)
    await page.click('[id="promtButton"]')
    await page.waitForTimeout(3000)
})

//const popup = await page.waitForEvent('popup');

//const popup = await Promise.all([
// page.waitForEvent('popup'),
// page.click()
// ])

await page.goto('https://www.flipkart.com/');

    await page.waitForTimeout(6000);
    try {
        const btnClose = await page.locator('[class="_b3wT1E"]');
        await btnClose.waitFor({ state: 'visible' });
        await btnClose.click();
    }
    catch (e) {
        console.error('button is not visible');
    }

    await page.locator('form[action="/search"] input[placeholder="Search for Products, Brands and More"]').fill('iphone');
    await page.waitForTimeout(3000);


//Relationship between tags
// 1. parent(html)
// 2. child(head, body)
// 3. preceding-sibling(above tag)(head for body)
// 4. following-sibling(below tag)(body for head)
// 5. ancestor grandfather
// 6. descendant child

//tagename[@id='value']/parent::tagename[@att='value]/following-sibling::tagname[text()='']
