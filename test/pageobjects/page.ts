import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {

    readonly URL: string;
    
    constructor() {
       this.URL = 'https://www.saucedemo.com/';
    }

    async open () {
        await browser.url(this.URL);
    }
}
