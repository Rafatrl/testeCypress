/// <reference types="Cypress" />  
import InventoryPage from "../pages/01_inventory_page";
import LoginPage from "../pages/00_login_page";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage()

Given(/^que o usuário visita a página$/, () => {
	loginPage.visitaPage();
});

When(/^inserir o "([^"]*)" válido$/, (username) => {
	loginPage.fillUser(username)
});
	
When(/^inserir a "([^"]*)" válida$/, (password) => {
	loginPage.fillPass(password)
});

When(/^inserir a "([^"]*)" inválida$/, (passwordInvalid) => {
	loginPage.fillInvalidPass(passwordInvalid);
});

When(/^clicar no botão Login$/, () => {
	loginPage.submitLogin()
});

Then(/^será redirecionado para a tela de inventário$/, () => {
	inventoryPage.validatyInventory()
});

Then(/^o sistema exibe a mensagem: "([^"]*)"$/, (message1) => {
	loginPage.msgLoginInvalido(message1)
});

Then(/^o sistema exibe a mensagem: "([^"]*)"$/, (message2) => {
	loginPage.msgFieldRequired(message2)
});

Then(/^o sistema exibe a mensagem: "([^"]*)"$/, () => {
	loginPage.msgUserRequired()
});

Then(/^o sistema exibe a mensagem: "([^"]*)"$/, () => {
	loginPage.msgPassRequired()
});

When(/^não inserir o "([^"]*)"$/, () => {
	loginPage.emptyInputUsername()
});

When(/^não inserir a "([^"]*)"$/, () => {
	loginPage.emptyInputPassword()
});
