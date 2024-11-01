import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {

    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/ParaBank | Welcome | Online Banking/);

    await page.locator('input[name="username"]').fill('Rima_2'); 

    await page.locator('input[name="password"]').fill('Abcd1234@'); 

    await page.getByRole('button', { name: 'Log In' }).click();

    const url = page.url();

    if(url == 'https://parabank.parasoft.com/parabank/overview.htm')
    {

        //await expect(page.getByRole('heading', { name: 'Error!' })).toBeVisible();

        await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();

        //const object = page.getByRole('heading', { name: 'Accounts Overview' })
        //const text = await object.textContent();
        
         //Open New Account
         await page.getByRole('link', { name: 'Open New Account' }).click();
         
         const openNewAccount_h1 = await page.getByRole('heading', { name: 'Open New Account' });
         await expect(openNewAccount_h1).toBeVisible();
 
         // Locate the dropdown by its selector
         const dropdown = await page.locator('select#type.input');
         await dropdown.selectOption('SAVINGS'); // Select an option by its value
         await expect(dropdown).toHaveValue('1');
 
         const dropdown1 = await page.locator('select#fromAccountId.input');
         await dropdown1.selectOption('43203');
    
         await page.getByRole('button', { name: 'Open New Account' }).click();
 
         await expect(page.getByRole('heading', { name: 'Account Opened!' })).toBeVisible();
 
         //logout
         await page.getByRole('link', { name: 'Log Out' }).click();
         await expect (page.getByRole('heading', { name: 'Customer Login' })).toBeVisible();
        
    }
    
    else
    {
        await expect(page.getByRole('heading', { name: 'Error!' })).toBeVisible();
    }

});