import{test,expect} from '@playwright/test'

test('file handling',async({page})=>{
  await page.goto('https://demoqa.com/upload-download')
  //upload a file
  //setInputFiles('locator','filepath'(test-results/.last-run.json))-> to upload a single file
  //we can store in a variable and declare in file path

//page.setInputFiles('input[type="file"]',['','']) --> to upload multiple files

//page.setInputFiles('input[type="file"]',[]]) --> to clear the file input


//download a file(waitForEvent('download)) --> Iq
//const download = await promise.all([
//page.waitForEvent('download),
//page.click('locator')
//])

const download = await Promise.all([
page.waitForEvent('download'),
page.click("a#downloadButton")

])

await page.setInputFiles('input#uploadFile','/Users/selvaganesh/Selva.java')

})