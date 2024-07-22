//Elementos da página de login
class LoginElements{
    //elementos da tela de login
    inputUsername = () => {return '#user-name'}
    inputPassword = () => {return '#password'}
    btnLogin = () => {return '#login-button'}

    //elementos de validação
    // mensagens de erro 'input[type="text"]'
    errInvalidLogin = () => {return '[data-test="error"]'}
    errFieldRequired = () => {return '[data-test="error"]'}
    errUserRequired = () => {return '[data-test="error"]'}
    errPassRequired = () => {return '[data-test="error"]'}

} export default LoginElements