import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    get inputUsername () { return $('#user-name'); }
    get inputPassword () { return $('#password'); }
    get btnSubmit () { return $('#login-button'); }
    get logo () { return $('.login_logo'); }
    get errorMsg() { return $('h3[data-test="error"]'); }  
    get errorCircles () { return $$('svg[data-icon="times-circle"]'); }
     
    
    async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }


    async validateWronglogin (message: string) {
        await expect(this.errorCircles[0]).toBePresent();
        await expect(this.errorCircles[1]).toBePresent();
        await expect(this.errorMsg).toHaveText(message);
    }


    async open () {
        await super.open();
    }
    
}

export default new LoginPage();
