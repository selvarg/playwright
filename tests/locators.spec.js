



//Locators
//in general locators -> id, class, xpath, css
//in build locators
/*
These are the recommended built-in locators.

page.getByRole()-->(button, link, textbox, checkbox) to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/
  //DOM = Document object model (cmt+shift+i)
  //1. pink -> tag
  //2. orange -> attribute
  //3 .blue -> value
  //4. black -> text

import{test, expect} from '@playwright/test'
test('locator',async({page})=>{
  await page.goto('https://www.amazon.in/');
  const val = await page.locator('input#twotabsearchtextbox');
  await val.fill('mobiles');
  await page.click('#nav-search-submit-button');
  await page.waitForTimeout(3000)
  await page.screenshot({path:'Amazon.png'})
})

//xpath
// relative -> // -> findout element from anywhere in the DOM
// absolute -> / -> starts from the HTML tag

//Syntax
//basic -> //tagename[@att='vale']
 //       -> //input[@aria-lable="search amaxon.in"]

 // TEXT -> //tagname[text()='value']
//       -> //a[text()="Mobile"]


// Index -> (//tagname[@att='vale'])[1] //most likely index which can get position not exactly getting words

//Contains -> //tagname[contains(@att,'value')]
//         -> //span[contains(text(),'results for')] // holf of the text

//Css selector

//basic -> tagename[att='value'] or [att='value'] no need // and @ like xpath
//

// Contains --> ^ --> [att*='value']
// starts with --> $ --> [att^='v']
// ends with --> * --> [att$='v'] mostly used (need to take next words, not random words)

//page.getByRole()-->(button, link, textbox, checkbox)
//getByRole(button : {name : 'submit'} exact : true) --> which is exactly getting the value

test('handling dropdown and record video',async({page})=>{
  //in-build fixtures
  //browser
  //context -->Context controls environment // Context = browser session
  //page --> Page interacts with UI //Page = browser tab

// Browser = Chrome
// Context = Incognito window
// Page = Tab inside that window

  const browser= await chromium.launch();
  const context= await browser.newContext({
    recordVideo:{
      dir: 'recorder/'
    }
  });
  const page = await context.newPage();
  //selectOption()->handle dropdown
  //index
  await page.goto("https://www.hyrtutorials.com/p/html-dropdown-elements-practice.html")
    //value
  await page.selectOption('#course',{value:'net'})
  await page.waitForTimeout(2000);

  //lable
    await page.selectOption('#course',{lable:'Javascript'})
    await page.waitForTimeout(2000);

    //index
    await page.selectOption('#course',{index:1})
    await page.waitForTimeout(2000);

    await page.selectOption('#ide',['ec','ij','vs'])
    await page.waitForTimeout(2000);


})

test('locators',async({page})=>{
  await page.goto('https://testautomationcentral.com/demo/dropdown.html')
  await page.selectOption('select.form-select',{index:1})

})

//task - learn how to handle new tab, popup, and getting locator from parent, and storing in a variable