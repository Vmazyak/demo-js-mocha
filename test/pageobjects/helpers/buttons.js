const Page = require('../page');
class Buttons extends Page {
    get addToCartButton() {
        return $('#inventory_item_container > div > div > div > button')
    }
    get backButton() {
        return $('#inventory_item_container > div > button')
    }
    get cartButton() {
        return $('#shopping_cart_container > a > svg')
    }
    get checkout(){
        return $('#cart_contents_container > div > div.cart_footer > a.btn_action.checkout_button')
    }
    get firstName(){
        return $('#first-name');
    }
}


module.exports = new Buttons();
