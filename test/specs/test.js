const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const CheckoutPage = require('../pageobjects/checkout.page');
var config = require('../../wdio.conf.js').config;

describe('Login', () => {
    it('We should be able to login with valid credentials', () => {
        LoginPage.open();
        LoginPage.login(config.account.name, config.account.password);

        expect(InventoryPage.products).toBeExisting();
        expect(InventoryPage.products).toHaveTextContaining(
            'Products');
    });
});

describe('Add to cart', () => {
    it('We should be able to add a product to cart', () => {
        LoginPage.open();
        LoginPage.login(config.account.name, config.account.password);
        InventoryPage.addToCart();
        InventoryPage.cart();
        InventoryPage.checkout();
        CheckoutPage.checkout();
        CheckoutPage.logout();
    });
});

describe('Logout', () => {
    before( () => {
        LoginPage.open();
        LoginPage.login(config.account.name, config.account.password);

        expect(InventoryPage.products).toBeExisting();
        expect(InventoryPage.products).toHaveTextContaining(
            'Products');
    });

    it('Logout', () => {
        LoginPage.logout();
        expect(LoginPage.btnSubmit).toBeExisting();
    });
});


