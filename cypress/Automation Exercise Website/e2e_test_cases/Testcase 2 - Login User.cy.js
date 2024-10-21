import { slowCypressDown } from "cypress-slow-down"
import 'cypress-file-upload'

slowCypressDown(1500)

it('Testcase 2 - Login User',() => {

    cy.visit('https://www.automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="login-email"]').type("tasnim_test7@yopmail.com")
    cy.get('[data-qa="login-password"]').type("Abcd123@")
    cy.get('[data-qa="login-button"]').click();
    cy.get('b').should('contain', 'Nila')
    
    //logout
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    
});