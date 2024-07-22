/// <reference types="Cypress" />  
import InventoryPage from "../pages/01_inventory_page";

const inventoryPage = new InventoryPage()


Given(/^que o usuário esteja logado na sua conta$/, () => {
	inventoryPage.userLogged()
});


When(/^clicar na imagem do produto$/, () => {
	inventoryPage.byImage1()
});

When(/^clicar no título do produto$/, () => {
	inventoryPage.byTitle()
});

    //validação de teste
Then(/^é redirecionado para a página de descrição do produto$/, () => {
	inventoryPage.validatyDetailItem()
});


