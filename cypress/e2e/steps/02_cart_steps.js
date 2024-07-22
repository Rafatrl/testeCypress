/// <reference types="Cypress" />  
import InventoryPage from "../pages/01_inventory_page";
import CartPage from "../pages/02_cart_page";

const inventoryPage = new InventoryPage()
const cartPage = new CartPage()


Given(/^que o usuário esteja logado na sua conta$/, () => {
	inventoryPage.userLogged()
});

When(/^clicar no ícone do carrinho$/, () => {
	inventoryPage.toCart()
});


When(/^acrescentar um item ao carrinho$/, () => {
	cartPage.oneItemToCart()
});

When(/^acrescentar mais de um item ao carrinho$/, () => {
	cartPage.manyItemToCart()
});

Then(/^será exibida a tela do carrinho vazio$/, () => {
	cartPage.labelCartPage()
});


Then(/^o item será exibido na tela de itens do carrinho$/, () => {
	cartPage.validatyOneItemCart()
});

Then(/^os itens serão exibidos na tela de itens do carrinho$/, () => {
	cartPage.validatyManyItemCart()
});

// Feature 4

When(/^acrescentar itens ao carrinho pelo inventário$/, () => {
	cartPage.manyItemToCart()
});


When(/^remover o item do carrinho pelo inventário$/, () => {
	cartPage.removeManyItemCart()
});

Then(/^o carrinho fica vazio.$/, () => {
	cartPage.validatyCartEmpty()
});

When(/^remover os produtos do carrinho$/, () => {
    cartPage.removeItemCartPage()
});
