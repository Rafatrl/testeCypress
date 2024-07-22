//Elementos da página do carrinho
class CartElements{

    //botao de remover item
    btnRemoveItem = () => {return ".cart_button"}
    btnRemoveItem1 = () => {return ".cart_item:nth-child(3) .btn_secondary"}
    btnRemoveItem2 = () => {return ".cart_item:nth-child(4) .btn_secondary"}
    btnRemoveItem1InCart = () => {return ":nth-child(3) > .cart_item_label > .item_pricebar > .btn_secondary"}
    btnRemoveItem2InCart = () => {return ":nth-child(4) > .cart_item_label > .item_pricebar > .btn_secondary"}
    btnCheckout = () => {return ".btn_action"}

    //elementos de validação
    //título da página do Carrinho
    labelCart = () => {return "#contents_wrapper > div.subheader"}
    //grid da página do Carrinho
    itemLabelCart = () => {return ".cart_item_label"}
    //item inserido no carrinho
    item1inCart = () => {return ':nth-child(3) > .cart_item_label'}
    item2inCart = () => {return ':nth-child(4) > .cart_item_label'}

} export default CartElements