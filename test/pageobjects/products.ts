
import Page from './page.js';

class ProductsPage extends Page {
    
    get products () { return $$('div[data-test="inventory-item-name"]'); }
    get title () { return $('span[data-test="title"]'); }
    get btnAddToCart () { return $('button[data-test="add-to-cart"]'); }
    get btnRemove () { return $('button[data-test="remove"]'); }
    get btnCart () { return $('a[data-test="shopping-cart-link"]'); }
    get btnCheckout () { return $('button[data-test="checkout"]'); }
    
    
    async clickProduct (index: number) {      
        await this.products[index-1].click();
    }

    async clickAddToCart () {      
        await this.btnAddToCart.click();
    }

    async clickShoppingCart () {      
        await this.btnCart.click();
    }

    async clickCheckOut () {      
        await this.btnCheckout.click();
    }  
    
}

export default new ProductsPage();
