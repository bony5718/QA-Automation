import { slowCypressDown } from "cypress-slow-down"
import 'cypress-file-upload'

slowCypressDown(1500)


it('Testcase 4 - Contact Us Form',() => {

    cy.visit('https://www.automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(8) > a').click()

    cy.get('[data-qa="name"]').type("Nila")
    cy.get('[data-qa="email"]').type("tasnim_test7@yopmail.com")
    cy.get('[data-qa="subject"]').type("Can't edit my personal information")
    cy.get('[data-qa="message"]').type("I can't change my address.")
 
    //file upload
    cy.fixture('example.pdf').then(fileContent => {
        cy.get('input[type="file"]').attachFile({
          fileContent,
          fileName: 'example.pdf',
          mimeType: 'application/pdf'
        });
    });

    cy.get(':nth-child(6) > .form-control').focus()
   
    cy.get('[data-qa="submit-button"]').click()
    cy.get('.status').should('contain', "Success! Your details have been submitted successfully.")
    cy.get('#form-section > .btn').click()
});