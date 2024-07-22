/// <reference types="Cypress" />  
import InventoryElements from "../elements/01_inventory_elements";
import LoginElements from "../elements/00_login_elements";
import LoginPage from "./00_login_page";

const inventoryElements = new InventoryElements()
const loginElements = new LoginElements()
const loginPage = new LoginPage()

class InventoryPage {

    userLogged() {
        loginPage.visitaPage() 
        cy.get(loginElements.inputUsername()).type('standard_user')
        cy.get(loginElements.inputPassword()).type('secret_sauce')
        cy.get(loginElements.btnLogin()).click()
        cy.get(inventoryElements.labelInventory).contains('Products')
        }
    

        toCart() {
            cy.get(inventoryElements.iconCart()).click()
        }

        byImage1() {
            cy.get(inventoryElements.imgItem1()).click()
        }

        byTitle() {
            cy.get(inventoryElements.titleItem1()).click()
        }

        //elementos de validação
        validatyInventory() {
            cy.get(inventoryElements.labelInventory()).contains('Products')
        }

        validatyDetailItem() {
            cy.get(inventoryElements.detailProduct()).contains('Sauce Labs Backpack')
        }

} export default InventoryPage
