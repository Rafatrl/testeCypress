Feature: 4. Remover do Carrinho
Funcionalidade: Teste a remoção de produtos do carrinho.

Background: 
Given que o usuário esteja logado na sua conta
And acrescentar itens ao carrinho pelo inventário

Scenario: CT 4.1: Remoção de um produto do carrinho pela tela de produtos
When remover o item do carrinho pelo inventário
Then o carrinho fica vazio.

Scenario: CT 4.2: Remoção de mais de um produto do carrinho na tela do carrinho
When clicar no ícone do carrinho
And remover os produtos do carrinho
Then o carrinho fica vazio.
