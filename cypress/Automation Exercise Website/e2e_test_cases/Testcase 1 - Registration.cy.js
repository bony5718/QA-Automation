import { slowCypressDown } from "cypress-slow-down"
import 'cypress-file-upload'

slowCypressDown(1500)

it('Testcase 1 - Register User',() => {

cy.visit('https://www.automationexercise.com/')
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

cy.get('[data-qa="signup-name"]').type("Nila")

let max = 50;  // Define the maximum value (exclusive)
let randomInt = Math.floor(Math.random() * max);

cy.get('[data-qa="signup-email"]').type("tasnim_test"+ randomInt + "@yopmail.com")

cy.get('[data-qa="signup-button"]').click()

cy.get('#id_gender2').check()  //radio button
cy.get('[data-qa="password"]').type("Abcd123@")

cy.get('[data-qa="days"]').select('1')    //dropdown
cy.get('[data-qa="months"]').select('August')  //dropdown
cy.get('[data-qa="years"]').select('1985')   //dropdown

cy.get('#newsletter').check() //checkbox
cy.get('#optin').check() //checkbox

cy.get('[data-qa="first_name"]').type("Nila")
cy.get('[data-qa="last_name"]').type("Naira")
cy.get('[data-qa="company"]').type("ABCD")
cy.get('[data-qa="address"]').type("15 Brooklyn RD")
cy.get('[data-qa="address2"]').type("Apt E")
cy.get('[data-qa="country"]').select('United States')
cy.get('[data-qa="state"]').type("New York")
cy.get('[data-qa="city"]').type("Buffalo")
cy.get('[data-qa="zipcode"]').type("23100")
cy.get('[data-qa="mobile_number"]').type("3117226444")
cy.get('[data-qa="create-account"]').click()

cy.get('b').should('have.text', "Account Created!")
cy.get('[data-qa="continue-button"]').click()

//logout
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

//account deleted
//cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
//cy.get('b').should('have.text', "Account Deleted!")
//cy.get('[data-qa="continue-button"]').click()

});