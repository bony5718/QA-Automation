import { slowCypressDown } from "cypress-slow-down"
import 'cypress-file-upload'

slowCypressDown(1500)

it('Testcase 1 - Login, About, Support, Change Password, Logout',() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')

    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

    cy.get('.oxd-button').click()

    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

    cy.get('.oxd-userdropdown-tab').click()

    cy.get(':nth-child(1) > .oxd-userdropdown-link').click()  //about option

    cy.get('.orangehrm-modal-header > .oxd-text').should('contain.text', 'About')

    cy.get('.oxd-dialog-close-button').click()

    cy.get('.oxd-userdropdown').click()

    cy.get(':nth-child(2) > .oxd-userdropdown-link').click()  //support option

    cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain.text', 'Getting Started with OrangeHRM')

    cy.get('.oxd-userdropdown').click()

    cy.get(':nth-child(3) > .oxd-userdropdown-link').click()    //change password option

    cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain.text', 'Update Password')

    cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Abcd1234@')

    cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Abcd1234@')

    cy.get('.oxd-button--secondary').click()

    cy.get('.oxd-userdropdown').click()

    cy.get(':nth-child(4) > .oxd-userdropdown-link').click() //logout

});


