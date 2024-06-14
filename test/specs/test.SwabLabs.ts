import { expect } from '@wdio/globals'
import CheckoutPage from '../pageobjects/checkout.js'
import LoginPage from '../pageobjects/login.js'
import Overview from '../pageobjects/overview.js';
import ProductsPage from '../pageobjects/products.js'
import testData from '../data/testData.json' assert { type: "json" };

describe('Swab Labs', () => {

    before(async function () {
        await LoginPage.open();
    })

    it('Empty user and password', async () => {

        let msg = 'Epic sadface: Username is required';
        await LoginPage.login('','');
        await LoginPage.validateWronglogin(msg);        
    })

    it('Wrong user and password', async () => {

        let msg = 'Epic sadface: Username and password do not match any user in this service';
        await LoginPage.login(testData.wrongUser,testData.wrongPass);
        await LoginPage.validateWronglogin(msg);        
    })

    it('Locked out user', async () => {

        let msg = 'Epic sadface: Sorry, this user has been locked out.';
        await LoginPage.login(testData.lokedUser,testData.password);
        await LoginPage.validateWronglogin(msg);        
    })

    it('should add producto to checkout', async () => {
      
        await expect(LoginPage.logo).toHaveText('Swag Labs');
        await LoginPage.login(testData.user,testData.password);

        await ProductsPage.clickProduct(1);
        await ProductsPage.clickAddToCart();
        await expect(ProductsPage.btnRemove).toBePresent();
        await ProductsPage.clickShoppingCart();
        await ProductsPage.clickCheckOut();
      
        await CheckoutPage.addFirstName(testData.name);
        await CheckoutPage.addLastName(testData.lastName);
        await CheckoutPage.addZipCode(testData.zipcode);
        await CheckoutPage.clickContinue();

        await expect(Overview.title).toHaveText('Checkout: Overview');
        await expect(Overview.productName).toHaveText(testData.productName);
        await expect(Overview.productDesc).toHaveText(testData.productDesc);
        await expect(Overview.productPrice).toHaveText(testData.productPrice);
       
    })
})

