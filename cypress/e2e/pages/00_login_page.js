/// <reference types="Cypress" />  
import LoginElements from "../elements/00_login_elements";

const loginElements = new LoginElements() 

const url = Cypress.config('baseUrl');


class LoginPage {

    visitaPage() {
        cy.visit(url)
    }

    fillUser(username) {
        cy.get(loginElements.inputUsername()).type(username)
    }

    fillPass(password) {
        cy.get(loginElements.inputPassword()).type(password)
    }

    fillInvalidPass(passwordInvalid) {
        cy.get(loginElements.inputPassword()).type(passwordInvalid)
    }

    emptyInputUsername(){
        cy.get(loginElements.inputUsername()).should('have.value', '')
    }

    emptyInputPassword(){
        cy.get(loginElements.inputPassword()).should('have.value', '')
    }

    submitLogin() {
        cy.get(loginElements.btnLogin()).click()
    }

    //validação de teste
    msgLoginInvalido(message1) {
        cy.get(loginElements.errInvalidLogin()).contains(message1)
    }

    msgFieldRequired(message2) {
        cy.get(loginElements.errFieldRequired()).contains(message2)
    }

    msgUserRequired(message3) {
        cy.get(loginElements.errUserRequired()).contains(message3)
    }

    msgPassRequired(message4) {
        cy.get(loginElements.errPassRequired()).contains(message4)
    }

} export default LoginPage