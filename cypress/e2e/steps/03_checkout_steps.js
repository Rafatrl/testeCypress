/// <reference types="Cypress" />  
import CartElements from "../elements/02_cart_elements";
import CheckoutElements from "../elements/03_checkout_elements";
import InventoryPage from "../pages/01_inventory_page";
import CartPage from "../pages/02_cart_page";
import CheckoutPage from "../pages/03_checkout_page";

const inventoryPage = new InventoryPage()
const cartPage = new CartPage()
const cartElements = new CartElements()
const checkoutPage = new CheckoutPage()
const checkoutElements = new CheckoutElements()



When(/^acrescentar itens ao carrinho$/, () => {
	cartPage.manyItemToCart()
    inventoryPage.toCart()
    cy.get(cartElements.btnCheckout()).click()
});


When(/^inserir os dados pessoais e endereço$/, () => {
	checkoutPage.fillRegistry()
    cy.get(checkoutElements.btnContinue()).click()
    cy.get(checkoutElements.labelPayment()).should('exist')
});

When(/^clicar no botão Finish$/, () => {
	cy.get(checkoutElements.btnFinish()).click()
});

Then(/^a compra estará concluída.$/, () => {
    cy.get(checkoutElements.finishPayment()).should('exist')

});
