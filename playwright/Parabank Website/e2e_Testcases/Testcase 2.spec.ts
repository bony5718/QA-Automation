import { test, expect } from '@playwright/test';


test('Forget login info', async ({ page }) => {

    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/ParaBank | Welcome | Online Banking/);

    await page.getByRole('link', { name: 'Forgot login info?' }).click();

    await expect (page.getByRole('heading', { name: 'Customer Lookup' })).toBeVisible();

    await page.locator('input[id="firstName"]').fill('Rima'); 
    
    await page.locator('input[id="lastName"]').fill('Khan'); 

    await page.locator('input[id="address.street"]').fill('1233 ABCD Rd'); 

    await page.locator('input[id="address.city"]').fill('Huston'); 

    await page.locator('input[id="address.state"]').fill('Texas'); 

    await page.locator('input[id="address.zipCode"]').fill('12365'); 

    await page.locator('input[id="ssn"]').fill('0000'); 

    await page.getByRole('button', { name: 'Find My Login Info' }).click();

    await expect(page.getByText('Your login information was located successfully. You are now logged in.')).toBeVisible();

    await page.getByRole('link', { name: 'Log Out' }).click();

    await expect (page.getByRole('heading', { name: 'Customer Login' })).toBeVisible();
});