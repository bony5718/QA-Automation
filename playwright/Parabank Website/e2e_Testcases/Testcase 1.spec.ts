import { test, expect } from '@playwright/test';

test('Registration and Logout', async ({ page }) => {

    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/ParaBank | Welcome | Online Banking/);

    await page.getByRole('link', { name: 'Register' }).click();

    const h1 = await page.getByRole('heading', { name: 'Signing up is easy!' });
    await expect(h1).toBeVisible();

    const charCode = Math.floor(Math.random() * 10) + 48;  // '0' is char code 48
    const random_Digit = String.fromCharCode(charCode);
    
    await page.locator('input[id="customer.firstName"]').fill('Rima_'+ random_Digit); 
    
    await page.locator('input[id="customer.lastName"]').fill('Khan'); 

    await page.locator('input[id="customer.address.street"]').fill('1233 ABCD Rd'); 

    await page.locator('input[id="customer.address.city"]').fill('Huston'); 

    await page.locator('input[id="customer.address.state"]').fill('Texas'); 

    await page.locator('input[id="customer.address.zipCode"]').fill('12365'); 

    await page.locator('input[id="customer.phoneNumber"]').fill('1112224444'); 

    await page.locator('input[id="customer.ssn"]').fill('0000'); 

    await page.locator('input[id="customer.username"]').fill('Rima_'+ random_Digit); 

    await page.locator('input[id="customer.password"]').fill('Abcd1234@'); 

    await page.locator('input[id="repeatedPassword"]').fill('Abcd1234@'); 

    await page.getByRole('button', { name: 'Register' }).click();

    await expect(page.getByText('Your account was created successfully. You are now logged in.')).toBeVisible();

    await page.getByRole('link', { name: 'Log Out' }).click();

    await expect (page.getByRole('heading', { name: 'Customer Login' })).toBeVisible();
});

