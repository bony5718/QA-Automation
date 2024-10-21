import { slowCypressDown } from "cypress-slow-down"
import 'cypress-file-upload'

slowCypressDown(1500)

it('Testcase 3 - Account Deleted',() => {

    cy.visit('https://www.automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

    let max = 20;  // Define the maximum value (exclusive)
    let randomInt = Math.floor(Math.random() * max);

    cy.get('[data-qa="login-email"]').type("tasnim_test"+ randomInt +"@yopmail.com")

    cy.get('[data-qa="login-password"]').type("Abcd123@")
    cy.get('[data-qa="login-button"]').click();

    //account deleted
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
    cy.get('b').should('have.text', "Account Deleted!")
    cy.get('[data-qa="continue-button"]').click()
});
