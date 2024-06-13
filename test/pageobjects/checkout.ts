import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutPage extends Page {
    get inputFirstName() { return $('input[data-test="firstName"]'); }
    get inputLastName() { return $('input[data-test="lastName"]'); }
    get inputZipCode () { return $('input[data-test="postalCode"]'); } 
    get btnContinue () { return $('input[data-test="continue"]'); }
  
    
    async addFirstName (firstName: string) {      
        await this.inputFirstName.setValue(firstName);
    }

    async addLastName (lastName: string) {      
        await this.inputLastName.setValue(lastName);
    }

    async addZipCode(zipCode: string) {      
        await this.inputZipCode.setValue(zipCode);
    }

    async clickContinue () {      
        await this.btnContinue.click();
    }

}

export default new CheckoutPage();
