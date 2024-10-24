import { test, expect } from '@playwright/test';

test('Admin Page', async ({ page }) => {

    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

   // Expect a title "to contain" a substring.
   await expect(page).toHaveTitle(/ParaBank | Welcome | Online Banking/);

   await page.locator('#headerPanel').getByRole('link', { name: 'Admin Page' }).click();

   await expect(page.getByRole('heading', { name: 'Administration' })).toBeVisible();

   //await page.locator('input#accessMode2.input').Checked();
   //await page.getByLabel('REST (XML)').click();
   
   //radio button
   // Locate the radio button by its label or ID
   await page.locator('input[type="radio"][value="restxml"]').click();
   
   // Optionally, assert that the radio button is checked
   await expect(page.locator('input[type="radio"][value="restxml"]')).toBeChecked();

   await page.locator('input#soapEndpoint.inputLarge').fill('ABC')

   await page.locator('input#restEndpoint.inputLarge').fill('CCC')

   await page.locator('input#initialBalance.input').clear();
   await page.locator('input#initialBalance.input').fill('400');

   await page.locator('input#minimumBalance.input').clear();
   await page.locator('input#minimumBalance.input').fill('100');
 
   //dropdown
   // Select an option by its value, //Replace 'optionValue' with the actual value of the option
   await page.locator('select#loanProvider.input').selectOption('jms');

   // Optionally, assert that the correct option is selected
   await expect(page.locator('select#loanProvider.input')).toHaveValue('jms');

   await page.locator('select#loanProcessor.input').selectOption('Down Payment');
   await expect(page.locator('select#loanProcessor.input')).toHaveValue('down'); 

   await page.locator('input[id="loanProcessorThreshold"]').clear()
   await page.locator('input[id="loanProcessorThreshold"]').fill('20')

   await page.getByRole('button', { name: 'SUBMIT' }).click();

   await expect(page.getByText('Settings saved successfully.')).toBeVisible();

});