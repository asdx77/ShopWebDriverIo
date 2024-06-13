import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OverviewPage extends Page {
    get title() { return $('span[data-test="title"]'); }
    get productName() { return $('div[data-test="inventory-item-name"]'); }
    get productDesc() { return $('div[data-test="inventory-item-desc"]'); }
    get productPrice() { return $('div[data-test="inventory-item-price"]'); }   

}

export default new OverviewPage();
