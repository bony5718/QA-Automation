import { slowCypressDown } from "cypress-slow-down"
import 'cypress-file-upload'

slowCypressDown(1500)

it('Testcase 3 - Assign Leave',() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')

    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

    cy.get('.oxd-button').click()

    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

    cy.get('.orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(1)').click()

    cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain.text', 'Assign Leave')
    
    //custom type and select
    cy.get('.oxd-autocomplete-text-input > input').type('Thomas Kutty Benny')
    cy.get('.oxd-autocomplete-dropdown').contains('Thomas Kutty Benny').click()


    //custome drop down
    cy.get('.oxd-select-text').click()
    cy.get('.oxd-select-dropdown').contains('CAN - FMLA').click()

    //custom calender
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click()
    cy.get(':nth-child(20) > .oxd-calendar-date').contains('20').click()

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click()
    cy.get(':nth-child(25) > .oxd-calendar-date').contains('25').click()
    
    //custome drop down
    cy.get('.oxd-grid-4 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-grid-4 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-dropdown').contains('All Days').click()

    //custome drop down
    cy.get('[style="grid-column-start: 1;"] > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('[style="grid-column-start: 1;"] > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-dropdown').contains('Specify Time').click()

    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-time-wrapper > .oxd-time-input > .oxd-icon').click()
    cy.get('.oxd-time-hour-input > .oxd-input').clear().type('10')
    cy.get('.oxd-time-minute-input > .oxd-input').clear().type('30')
    cy.get('.oxd-time-period-input > :nth-child(1) > input').click()
    
    //customer set time
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-time-wrapper > .oxd-time-input > .oxd-icon').click()
    cy.get('.oxd-time-hour-input > .oxd-input').clear().type('04')
    cy.get('.oxd-time-minute-input > .oxd-input').clear().type('30')
    cy.get(':nth-child(2) > input').click()
    
    cy.get('.oxd-textarea').type('Need Leave')

    cy.get('.oxd-button').click()
    
    cy.wait(3500)
    cy.get('.oxd-sheet').find('.orangehrm-modal-header > .oxd-text').contains('Confirm Leave Assignment')
    cy.get('.orangehrm-modal-footer > .oxd-button--secondary').click()

});
