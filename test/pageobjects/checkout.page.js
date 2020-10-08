const { randomValue } = require('./helpers/random');

const Page = require('./page');
class CheckoutPage extends Page {
    
    get firstName () { return $('#first-name') }
    get lastName () { return $('#last-name') }
    get code () { return $('#postal-code') }
    get btnSubmit () { return $('input[type="submit"]') }
    get btnFinish () { return $('.cart_button') }

    get subheader() { return $('.subheader') }

    
    checkout () {
        this.firstName.setValue(randomValue('firstn_'));
        this.lastName.setValue(randomValue('lastn_'));
        this.code.setValue(randomValue('code_'));
        this.btnSubmit.click();
        expect(this.subheader).toHaveTextContaining('Checkout: Overview');

        this.btnFinish.click();
        expect(this.subheader).toHaveTextContaining('Finish');
    }

    open () {
        return super.open('/');
    }
}

module.exports = new CheckoutPage();