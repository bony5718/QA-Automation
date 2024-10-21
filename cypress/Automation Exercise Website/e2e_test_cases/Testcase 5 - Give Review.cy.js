import { slowCypressDown } from "cypress-slow-down"
import 'cypress-file-upload'

slowCypressDown(1500)

it('Testcase 5 - Verify All Products and Product Detail Page and Give a Review',() => {

    cy.visit('https://www.automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()

    cy.get('.product-information > h2').should('contain', "Blue Top")
    cy.get(':nth-child(6) > b').should('include.text', "Availability")
    cy.get(':nth-child(7) > b').should('include.text', "Condition")
    cy.get(':nth-child(8) > b').should('include.text', "Brand")

    cy.get('#name').type("Farzana")
    cy.get('#email').type("tasnimbony.wedding+test12@gmail.com")
    cy.get('#review').type("This product offers excellent performance with its accurate health tracking, sleek design, and user-friendly interface, making it a great choice for those seeking a stylish and functional wearable. However, its higher price and limited app integration may be drawbacks for some users.")
    cy.get('#button-review').click()
    
});