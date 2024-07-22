Feature: 1. Login
Funcionalidade: Teste o login com um usuário válido e inválido.

Background: 
Given que o usuário visita a página

Scenario Outline: "<cenario>"
When inserir o "<username>" válido
And inserir a "<password>" válida 
And clicar no botão Login
Then será redirecionado para a tela de inventário

Examples:
    |         cenario        |    username    |   password    |
    | CT 1.1 - Login Valido  | standard_user  | secret_sauce  |


Scenario Outline: "<cenario>"
When inserir o "<username>" válido
And inserir a "<passwordInvalid>" inválida
And clicar no botão Login
Then o sistema exibe a mensagem: "<message1>"

Examples:
    |         cenario          |    username    | passwordInvalid | message1 |
    | CT 1.2 - Login Inválido  | standard_user  | senha_invalida  | Username and password do not match any user in this service |


Scenario Outline: "<cenario>"
When não inserir o "<username>"
And não inserir a "<password>"
And clicar no botão Login
Then o sistema exibe a mensagem: "<message2>"

Examples:
    |         cenario                     |  username  |  password  | message2             |
    | CT 1.3 - Login Campos obrigatórios  |            |            | Username is required |


Scenario Outline: "<cenario>"
When não inserir o "<username>"
And inserir a "<password>" válida 
And clicar no botão Login
Then o sistema exibe a mensagem: "<message3>"

Examples:
    |         cenario                           |  username  |   password   | message3             |
    | CT 1.4 - Login Campo usuário obrigatório  |            | secret_sauce | Username is required |

Scenario Outline: "<cenario>"
When inserir o "<username>" válido
And não inserir a "<password>" 
And clicar no botão Login
Then o sistema exibe a mensagem: "<message4>"

Examples:
    |         cenario                         |    username    | password | message4             |
    | CT 1.5 - Login Campo senha obrigatório  | standard_user  |          | Password is required |
