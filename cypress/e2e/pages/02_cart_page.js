/// <reference types="Cypress" />  
import InventoryElements from "../elements/01_inventory_elements";
import CartElements from "../elements/02_cart_elements";

const inventoryElements = new InventoryElements()
const cartElements = new CartElements()

class CartPage {

    oneItemToCart() {
        cy.get(inventoryElements.btnItem1toCart()).click()
    }

    manyItemToCart() {
        cy.get(inventoryElements.btnItem1toCart()).click()
        cy.get(inventoryElements.btnItem2toCart()).click()
    }

    //elementos de validação
    labelCartPage() {
        cy.get(cartElements.itemLabelCart()).should('not.exist')
    }

    validatyOneItemCart(){
        cy.get(inventoryElements.labelCart()).should('exist')
    }

    validatyManyItemCart(){
        cy.get(cartElements.item1inCart()).should('exist')
        cy.get(cartElements.item2inCart()).should('exist')

    }

// Feature 4

removeOneItemCart() {
    cy.get(inventoryElements.btn1Remove1OfCart()).click()
}

removeManyItemCart() {
    cy.get(inventoryElements.btn1Remove1OfCart()).click()
    cy.get(inventoryElements.btn2RemoveOfCart()).click()
}

removeItemCartPage() {
    cy.get(cartElements.btnRemoveItem1InCart()).click()
    cy.get(cartElements.btnRemoveItem2InCart()).click()
}

validatyCartEmpty(){
    cy.get(inventoryElements.layersCounter()).should('not.exist')
}

} export default CartPage
