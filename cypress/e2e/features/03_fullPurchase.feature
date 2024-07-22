Feature: 5. Finalizar Compra
Funcionalidade: Teste o fluxo de finalização de compra.

Background: 
Given que o usuário esteja logado na sua conta
And acrescentar itens ao carrinho

Scenario: CT 5.1: Remoção de um produto do carrinho pela tela de produtos

When inserir os dados pessoais e endereço
And clicar no botão Finish
Then a compra estará concluída.