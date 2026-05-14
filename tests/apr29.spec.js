import { test, expect, chromium } from '@playwright/test';
test('Handling iframes', async ({page}) => {
    // page.frame()
    // page.frameLocator()

    await page.goto('https://demo.automationtesting.in/Frames.html');
    
    // Selecting an input field inside a specific frame
    await page.frameLocator('#singleframe').locator('input[type="text"]').fill('hello');
    await page.waitForTimeout(4000);

    // Examples for nested/parent frames
    // await page.frameLocator('parent').frameLocator('child').locator().click();
    // const frame = await page.frameLocator('parent');
    // await frame.frameLocator().locator().click();

    
});

// Mouse actions summary:
// click()
// click({button : 'right'}) => contextclick or right click
// dblclick()
// hover()
// page.dragAndDrop(source, target)
// source.dragTo(target)
// mouse.up()
// mouse.down()
// mouse.move(0, 7);
// mouse.wheel();

test('Mouse Actions Example', async ({page}) => {
    await page.goto('https://www.amazon.in');
    const elemet = await page.locator('[id="nav-link-groceries"]');
    
    // Hovering over an element
    await elemet.hover();

    // Performing a Right Click (Context Click)
    await elemet.click({button: 'right'});
    
    await page.waitForTimeout(4000);
});


// Keyboard actions summary:
// page.keyboard.press();
// page.keyboard.type();

test('Keyboard Actions Example', async ({page}) => {
    // Example usage:
    // await page.keyboard.press('Enter');
    // await page.keyboard.type('Hello World');
});