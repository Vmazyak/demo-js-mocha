module.exports = class Page {

    get sidebar () { return $('.bm-burger-button') }
    get btnLogout () { return $('#logout_sidebar_link') }
   
    open (path) {
        return browser.url(`https://www.saucedemo.com/${path}`)
    }

    logout () {
        this.sidebar.click();
        this.btnLogout.waitForClickable({ timeout: 1000 });
        this.btnLogout.click();
    }
}
