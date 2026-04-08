import {test, expect} from '@playwright/test'

test("firsttest",async({page})=>{
await page.goto("https://www.facebook.com/")
})