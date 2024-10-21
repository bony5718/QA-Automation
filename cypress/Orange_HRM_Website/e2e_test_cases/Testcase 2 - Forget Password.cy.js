import { slowCypressDown } from "cypress-slow-down"

slowCypressDown(1500)


it('Testcase 2 - Forget Password',() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    cy.get('.orangehrm-login-forgot > .oxd-text').click()

    cy.get('.oxd-text--h6').should('contain.text', 'Reset Password')

    cy.get('.oxd-input').type('Admin')

    cy.get('.oxd-button--secondary').click()

});