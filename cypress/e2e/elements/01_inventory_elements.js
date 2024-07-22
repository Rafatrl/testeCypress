//Elementos da página de inventários
class InventoryElements{

    //elementos de um produto no inventário
    imgItem1 = () => {return '#item_4_img_link > .inventory_item_img'}
    titleItem1 = () => {return "#item_4_title_link > .inventory_item_name"}
    btnItem1toCart = () => {return ':nth-child(1) > .pricebar > .btn_primary'}
    btnItem2toCart = () => {return ':nth-child(2) > .pricebar > .btn_primary'}
    btn1Remove1OfCart = () => {return ":nth-child(1) > .pricebar > .btn_secondary"}
    btn2RemoveOfCart = () => {return ":nth-child(2) > .pricebar > .btn_secondary"}

    //íconne do carrinho
    iconCart = () => {return '#shopping_cart_container'}

    //elementos de validação
    //título da página do Inventário
    labelInventory = () => {return '#inventory_filter_container'}
    //Detalhe do Produto
    detailProduct = () => {return ".inventory_details_name"}
    //título da página do Carrinho
    labelCart = () => {return ".cart_item_label"}
    //ícone contagem de itens no carrinho 
    layersCounter = () => {return ".fa-layers-counter"}

} export default InventoryElements