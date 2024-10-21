import { slowCypressDown } from "cypress-slow-down"
import 'cypress-file-upload'

slowCypressDown(1500)


it('Testcase 6 - Add Emergency Contacts, Edit, Delete',() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')

    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

    cy.get('.oxd-button').click()

    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

    cy.get(':nth-child(6) > .oxd-main-menu-item').click() //My Info

    cy.get(':nth-child(3) > .orangehrm-tabs-item').click()  //Emergency Contacts

    cy.get(':nth-child(1) > .orangehrm-action-header > .oxd-button').click()

    cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('AABB')

    cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Wife')

    cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('111-444-2222')

    cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('555-444-2222')

    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('777-888-2222')

    cy.get('.oxd-button--secondary').click()

    cy.wait(2500)

    //Edit
    cy.get(':nth-child(2) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').should('exist').click()

    cy.get(':nth-child(1) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('BB RR')

    cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('333-111-7788')

    cy.get('.oxd-button--secondary').click()

    cy.wait(2500);

    //delete
    cy.get(':nth-child(4) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').should('exist').click()
    cy.wait(4500);
    cy.get('.oxd-sheet').find('.oxd-button--label-danger').click()
 
    //select for delete - checkbox
    cy.get(':nth-child(5) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
    
    cy.wait(2500);
    cy.get('[data-v-5a621acd=""][data-v-8146ff56=""] > .orangehrm-horizontal-padding > div > .oxd-button').click()

    cy.wait(2500);
    cy.get('.oxd-sheet').find('.oxd-button--label-danger').click()

});
