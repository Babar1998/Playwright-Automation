// const {test, expect} = require('@playwright/test')
import {test, expect} from '@playwright/test'

// test('Locators', async({page}) => {
//     await page.goto('https://demoblaze.com/index.html')
//     // await page.locator('id=login2').click()
//     await page.click('id=login2')
//     // await page.locator('#loginusername').type('pavanol')
//     // await page.locator('#loginusername').fill('pavanol')
//     // await page.type('#loginusername', 'pavanol')
//     await page.fill('#loginusername', 'pavanol')
//     // await page.locator("input[id='loginpassword']").type('test@123')
//     // await page.locator("input[id='loginpassword']").fill('test@123')
//     // await page.type("input[id='loginpassword']", 'test@123')
//     await page.fill("input[id='loginpassword']", 'test@123')
//     await page.click("//button[normalize-space()='Log in']")
//     const logoutlink = await page.locator("//a[normalize-space()='Log out']")
//     await expect(logoutlink).toBeVisible()
//     await page.close()
// })

test('LocateMultipleElements', async({page}) => {
    await page.goto('https://demoblaze.com/index.html')
    
    // const links = await page.$$('a')
    // for(const link of links){
    //     const linkText = await link.textContent();
    //     console.log(linkText)
    // }

    await page.waitForSelector("//div[@id='tbodyid']//div//h4//a")
    const products = await page.$$("//div[@id='tbodyid']//div//h4//a")
    for(const product of products){
        const prodName = await product.textContent();
        console.log(prodName);
    }
    
})