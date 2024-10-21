import { slowCypressDown } from "cypress-slow-down"
import 'cypress-file-upload'

slowCypressDown(1500)


it('Testcase 5 - Edit Contact Details',() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')

    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

    cy.get('.oxd-button').click()

    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

    cy.get(':nth-child(6) > .oxd-main-menu-item').click() //My Info

    cy.get(':nth-child(2) > .orangehrm-tabs-item').click()  //Contact Details

    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('2634 ABC Rd')

    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Apt F')

    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Austin')

    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Texas')

    cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('12345')

    cy.get('.oxd-select-text').click()
    cy.get('.oxd-select-dropdown').contains('United States').click()

    cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('111-222-3333')
    cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('111-333-4444')
    cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('666-888-5555')

    cy.get(':nth-child(9) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('abc@yahoo.com')
    cy.get(':nth-child(9) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('def@yahoo.com')

    cy.get('.oxd-form-actions > .oxd-button').click()

    cy.get('.orangehrm-action-header > .oxd-button').click()

    cy.get(':nth-child(1) > .oxd-grid-3').find('input[type="file"]').selectFile('cypress/fixtures/example.pdf', { force: true });

    cy.get(':nth-child(1) > .oxd-grid-3').find('.oxd-file-input-div').contains('example.pdf')

    cy.get('.oxd-textarea').type('New Attachment')

    cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button--secondary').click()

});