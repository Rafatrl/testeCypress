Feature: 3.	Adicionar ao Carrinho 
Funcionalidade: Teste a adição de um ou mais produtos ao carrinho.

Background: 
Given que o usuário esteja logado na sua conta

Scenario: CT 3.1: Inserção de nenhum produto ao carrinho
When clicar no ícone do carrinho
Then será exibida a tela do carrinho vazio

Scenario: CT 3.2: Inserção de apenas um produto ao carrinho
When acrescentar um item ao carrinho
And clicar no ícone do carrinho
Then o item será exibido na tela de itens do carrinho

Scenario: CT 3.3: Inserção de mais de um produto ao carrinho
When acrescentar mais de um item ao carrinho
And clicar no ícone do carrinho
Then os itens serão exibidos na tela de itens do carrinho
