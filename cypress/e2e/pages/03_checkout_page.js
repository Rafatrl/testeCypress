/// <reference types="Cypress" />  
import CheckoutElements from "../elements/03_checkout_elements"

const checkoutElements = new CheckoutElements()

class CheckoutPage {

    fillRegistry() {
        cy.get(checkoutElements.inputFirstName()).type('Primeiro Nome')
        cy.get(checkoutElements.inputLastName()).type('Segundo Nome')
        cy.get(checkoutElements.inputZipCode()).type('53648522')
    }    

} export default CheckoutPage