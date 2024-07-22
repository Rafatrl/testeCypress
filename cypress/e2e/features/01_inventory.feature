Feature: 2. Visualização de Produtos
Funcionalidade: Teste a visualização da lista de produtos após o login.

Background: 
Given que o usuário esteja logado na sua conta

Scenario: CT 2.1: Visualizar produto pela imagem
When clicar na imagem do produto
Then é redirecionado para a página de descrição do produto

Scenario: CT 2.2: Visualizar produto pelo título
When clicar no título do produto
Then é redirecionado para a página de descrição do produto
