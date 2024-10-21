import { slowCypressDown } from "cypress-slow-down"
import 'cypress-file-upload'

slowCypressDown(1500)



it('Testcase 7_1 - Add Employer',() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')

    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

    cy.get('.oxd-button').click()

    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

    cy.get(':nth-child(2) > .oxd-main-menu-item').click() //PIM

    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'PIM')

    //Add Employee
    cy.get('.orangehrm-header-container > .oxd-button').click()

    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('BAQ')
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('CCCC')
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Khan')

    let max1 = 10;  // Define the maximum value (exclusive)
    let randomInt1 = Math.floor(Math.random() * max1);
    cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('0385'+ randomInt1)

    //toggle button
    cy.get('.oxd-switch-input').click()
    cy.wait(2500)

    let max = 20;  // Define the maximum value (exclusive)
    let randomInt = Math.floor(Math.random() * max);
    cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('AQdOW'+ randomInt)


    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Abcd123@')
    cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Abcd123@')


    cy.get('.orangehrm-employee-image > .oxd-input-group > :nth-child(2)').find('input[type="file"]').selectFile('cypress/fixtures/profile.jpg', { force: true });
    cy.wait(2500)

    cy.get('.oxd-button--secondary').click()
    cy.wait(2500)

    cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('3265F2')
   
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2026-01-01').click()

    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-dropdown').contains('Canadian').click()
    
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-dropdown').contains('Single').click()

    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click()
    cy.get(':nth-child(20) > .oxd-calendar-date').contains('20').click()

    cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click()

    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()

});

it('Testcase 7_2 - Edit and Delete Employee',() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')

    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

    cy.get('.oxd-button').click()

    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

    cy.get(':nth-child(2) > .oxd-main-menu-item').click() //PIM

    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'PIM')

    //Edit Employee
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click()
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().type('ABC')
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear().type('XXX')
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().type('BBB')

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click()
    cy.get(':nth-child(20) > .oxd-calendar-date').contains('20').click()

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-dropdown').contains('Married').click()

    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('1991-01-05').click()
    
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click()

    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click() 

    cy.get('.--visited').click()

    //Delete Employee
    cy.get(':nth-child(2) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()
    cy.wait(4500);
    cy.get('.oxd-sheet').find('.oxd-button--label-danger').click()

    cy.get(':nth-child(3) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input').click()
    
    cy.wait(2500);
    cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click()

    cy.wait(2500);
    cy.get('.oxd-sheet').find('.oxd-button--label-danger').click()


});
