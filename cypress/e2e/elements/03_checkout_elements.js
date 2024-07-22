//Elementos da página do checkout
class CheckoutElements{
    //elementos do cadastro de nome e CEP
    inputFirstName = () => {return "#first-name"}
    inputLastName = () => {return "#last-name"}
    inputZipCode = () => {return "#postal-code"}
    btnContinue = () => {return ".btn_primary"}
    btnCancel = () => {return ".cart_cancel_link"}
    

    //tela Overview
    btnFinish = () => {return ".btn_action"}

    //elementos de validação
    
    //tela Overview
    labelPayment = () => {return ".summary_info_label:nth-child(1)"}

    //tela Finish
    finishPayment = () => {return ".complete-header"}


} export default CheckoutElements

