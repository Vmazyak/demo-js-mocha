const Page = require('./page');
const Buttons = require('./helpers/buttons.js');

class InventoryPage extends Page {

    get products() { return $('.header_secondary_container') }
    get badge() { return $('.shopping_cart_badge') }
    get subheader() { return $('.subheader') }
    addToCart() {


        const links = $$('.inventory_item_name')
        let badge = 0;

        for (let link of links) {
            if (link.getText() === "Sauce Labs Fleece Jacket") {
                link.click();
                Buttons.addToCartButton.click();
                Buttons.backButton.click();
                badge++;
            }
            if (link.getText() === "Sauce Labs Bike Light") {
                link.click();
                Buttons.addToCartButton.click();
                Buttons.backButton.click();
                badge++;
            }
        }

        expect(this.badge).toHaveText(badge.toString());

    }
    cart() { 
        Buttons.cartButton.click();
        expect(this.subheader).toHaveTextContaining('Cart');
    }
    checkout() { 
        Buttons.checkout.click();
        expect(this.subheader).toHaveTextContaining('Checkout: Your Information');
    }
}

module.exports = new InventoryPage();
