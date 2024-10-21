import { slowCypressDown } from "cypress-slow-down"
import 'cypress-file-upload'

slowCypressDown(1500)

it.only('Testcase 7_1 - Verify Scroll Up using Arrow button and Scroll Down functionality',() => {

    cy.visit('https://www.automationexercise.com/')

    cy.get('#footer').scrollIntoView()
    cy.get('.single-widget > h2').should('contain','Subscription')
    cy.get('#susbscribe_email').type("tasnim_test13@yopmail.com")
    cy.get('#subscribe').click()
    cy.get('#scrollUp').click()

});

it('Testcase 7_2 - Verify Scroll Up without Arrow button and Scroll Down functionality',() => {

    cy.visit('https://www.automationexercise.com/')

    cy.get('#footer').scrollIntoView()
    cy.get('.single-widget > h2').should('contain','Subscription')
    cy.get('#susbscribe_email').type("tasnim_test13@yopmail.com")
    cy.get('#subscribe').click()
    cy.get('a > img').scrollIntoView()

});