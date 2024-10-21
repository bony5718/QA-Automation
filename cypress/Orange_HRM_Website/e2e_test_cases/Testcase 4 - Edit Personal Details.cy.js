import { slowCypressDown } from "cypress-slow-down"
import 'cypress-file-upload'

slowCypressDown(1500)


it('Testcase 4 - Edit Personal Details',() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')

    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

    cy.get('.oxd-button').click()

    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

    cy.get(':nth-child(6) > .oxd-main-menu-item').click() //My Info
 
    //Add or Update Profile Picture
    cy.get('.employee-image').click()
    cy.get('.oxd-input-group').find('input[type="file"]').selectFile('cypress/fixtures/profile.jpg', { force: true });
    cy.wait(2500)

    cy.get('.oxd-button').click()
    cy.wait(2500)

    cy.get(':nth-child(1) > .orangehrm-tabs-item').click()

    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().type('ABC')

    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear().type('QQQ')

    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().type('WWW')

    cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('221133')

    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('11-22-333').click()

    cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('XYZ12345')

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2025-19-10').click()
    
    //custom dropdown
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-dropdown').contains('Canadian')

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-dropdown').contains('Married').click()

    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click()
    cy.get(':nth-child(25) > .oxd-calendar-date').contains('25').click()

    cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click()

    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()

    cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-dropdown').contains('A+').click()

    cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('665')
    //cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('512')

    cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').click()

    cy.get('.orangehrm-action-header > .oxd-button').click()

    //the File Input is Inside a Div
    cy.get('.orangehrm-attachment > .orangehrm-card-container > .oxd-form > :nth-child(1) > .oxd-grid-3').find('input[type="file"]').selectFile('cypress/fixtures/example.pdf', { force: true });
    
    cy.get('.orangehrm-attachment > .orangehrm-card-container > .oxd-form > :nth-child(1) > .oxd-grid-3').find('.oxd-file-input-div').contains('example.pdf')
    //cy.get('.orangehrm-attachment > .orangehrm-card-container > .oxd-form > :nth-child(1) > .oxd-grid-3').contains('example.pdf')

    cy.get('.oxd-textarea').type('Test Attachment')
    cy.get('.orangehrm-attachment > .orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button--secondary').click()

});
