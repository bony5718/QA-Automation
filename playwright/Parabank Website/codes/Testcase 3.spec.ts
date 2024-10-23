import { test, expect } from '@playwright/test';

test('Footer links', async ({ page }) => {

    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/ParaBank | Welcome | Online Banking/);

//About Us
    await page.locator('#footerPanel').getByRole('link', { name: 'About Us' }).click();
    await expect(page.getByRole('heading', { name: 'ParaSoft Demo Website' })).toBeVisible();

//Services
    await page.locator('#footerPanel').getByRole('link', { name: 'Services' }).click();

    await expect(page.getByText('Available Bookstore SOAP services:')).toBeVisible();
    await expect(page.getByText('Bookstore services:')).toBeVisible();
    await expect(page.getByText('Available ParaBank SOAP services:')).toBeVisible();
    await expect(page.getByText('ParaBank services:')).toBeVisible();
    await expect(page.getByText('Available RESTful services:')).toBeVisible();

//Products
   
   await page.locator('#footerPanel').getByRole('link', { name: 'Products' }).click();

   expect(page.url()).toBe('https://www.parasoft.com/products/');

   await expect(page.getByRole('heading', { name: "Innovative and Intelligent Software Testing Platform" })).toBeVisible();

   await page.goBack();
   expect(page.url()).toBe('https://parabank.parasoft.com/parabank/services.htm');


//Location
   
   await page.locator('#footerPanel').getByRole('link', { name: 'Locations' }).click();

   expect(page.url()).toBe('https://www.parasoft.com/solutions/');

   await expect(page.getByRole('heading', { name: "Deliver High-Quality & Secure Software" })).toBeVisible();

   await page.goBack();
   expect(page.url()).toBe('https://parabank.parasoft.com/parabank/services.htm'); 

//Forum
   
   await page.locator('#footerPanel').getByRole('link', { name: 'Forum' }).click();

   expect(page.url()).toBe('https://forums.parasoft.com/');

   // Locate the h1 heading with the text 'Featured Categories' 
   const featured_Categories_H1 = page.locator('h1', { hasText: 'Featured Categories' });
   await expect(featured_Categories_H1).toBeVisible();

   await page.goBack();
   expect(page.url()).toBe('https://parabank.parasoft.com/parabank/services.htm'); 

//Site Map
   
   await page.locator('#footerPanel').getByRole('link', { name: 'Site Map' }).click();
   
   await expect(page.locator('#rightPanel').getByText('Solutions')).toBeVisible();

//Contact Us

   await page.locator('#footerPanel').getByRole('link', { name: 'Contact Us' }).click();

   await expect(page.getByRole('heading', { name: 'Customer Care' })).toBeVisible();

   await page.locator('input[id="name"]').fill('Rima'); 
    
   await page.locator('input[id="email"]').fill('Rima@yopmail.com'); 

   await page.locator('input[id="phone"]').fill('1233457777'); 

   await page.locator('textarea[id="message"]').fill('I need help'); 

   await page.getByRole('button', { name: 'Send to Customer Care' }).click();

   await expect(page.getByText('A Customer Care Representative will be contacting you.')).toBeVisible();

});