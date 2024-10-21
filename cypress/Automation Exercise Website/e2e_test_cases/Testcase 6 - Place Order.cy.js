import { slowCypressDown } from "cypress-slow-down"
import 'cypress-file-upload'

slowCypressDown(1500)

it('Testcase 6_1 - Place Order: Login before Checkout',() => {

    cy.visit('https://www.automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

    //cy.login('tasnim_test7@yopmail.com', 'Abcd123@');
    
    //Login
    cy.get('[data-qa="login-email"]').type("tasnim_test7@yopmail.com")
    cy.get('[data-qa="login-password"]').type("Abcd123@")
    cy.get('[data-qa="login-button"]').click()

    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()

    //search first product
    cy.get('#search_product').type("Winter Top")
    cy.get('#submit_search').click()
    cy.get('.choose > .nav > li > a').click()

    //increment-decrement textbox
    //increment product quantity
    cy.get('#quantity').invoke('val').then((value) => {
        
        const currentValue = parseInt(value, 10);
  
        // Increment the value
        const newValue = currentValue + 2;

        // deincrement the value
        //const newValue = currentValue - 1;
  
        // Set the new value in the input field
        cy.get('#quantity').clear().type(newValue);
    })

    cy.get(':nth-child(5) > .btn').click()
    cy.get('.modal-title').should('contain','Added!')
    cy.get('.modal-footer > .btn').click() //continue shopping

    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()

    //Search 2nd Product
    cy.get('#search_product').type("Fancy Green Top")
    cy.get('#submit_search').click()
    cy.get('.productinfo > .btn').click()
    cy.get('.modal-title').should('contain','Added!')
    cy.get('u').click()

    cy.get('#product-5 > .cart_delete > .cart_quantity_delete').click() //remove product from card

    cy.get('.col-sm-6 > .btn').click()

    cy.get(':nth-child(2) > .heading').should('contain','Address Details')
    cy.get(':nth-child(4) > .heading').should('contain','Review Your Order')
    cy.get('h4 > b').should('contain','Total Amount')

    cy.get('.form-control').type(" Please ensure the package is delivered before 3 PM. Also, if possible, include a gift receipt with the order.")
    cy.get(':nth-child(7) > .btn').click()
    
    cy.get('.heading').should('contain',"Payment")
    cy.get('[data-qa="name-on-card"]').type("Naira")
    cy.get('[data-qa="card-number"]').type("000011112222")
    cy.get('[data-qa="cvc"]').type("156")
    cy.get('[data-qa="expiry-month"]').type("11")
    cy.get('[data-qa="expiry-year"]').type("2024")
    cy.get('[data-qa="pay-button"]').click()

    cy.get('[data-qa="order-placed"] > b').should('contain','Order Placed!')

    cy.get('.col-sm-9 > .btn-default').click()
    cy.get('[data-qa="continue-button"]').click()
});

it('Testcase 6_2 - Place Order: Register while Checkout',() => {

    cy.visit('https://www.automationexercise.com/')
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()

    cy.get('u').click()
    cy.get('.col-sm-6 > .btn').click()

    cy.get('.modal-body > :nth-child(2) > a > u').click()

    cy.get('[data-qa="signup-name"]').type("Nila")

    let max = 40;  // Define the maximum value (exclusive)
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
    cy.get('b').should('contain', 'Nila')

    cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
    cy.get('.col-sm-6 > .btn').click()

    cy.get(':nth-child(2) > .heading').should('contain','Address Details')
    cy.get(':nth-child(4) > .heading').should('contain','Review Your Order')
    cy.get('h4 > b').should('contain','Total Amount')

    cy.get('.form-control').type(" Please ensure the package is delivered before 3 PM. Also, if possible, include a gift receipt with the order.")
    cy.get(':nth-child(7) > .btn').click()
    
    cy.get('.heading').should('contain',"Payment")
    cy.get('[data-qa="name-on-card"]').type("Naira")
    cy.get('[data-qa="card-number"]').type("000011112222")
    cy.get('[data-qa="cvc"]').type("156")
    cy.get('[data-qa="expiry-month"]').type("11")
    cy.get('[data-qa="expiry-year"]').type("2024")
    cy.get('[data-qa="pay-button"]').click()

    cy.get('[data-qa="order-placed"] > b').should('contain','Order Placed!')

    cy.get('.col-sm-9 > .btn-default').click()
    cy.get('[data-qa="continue-button"]').click()
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

});