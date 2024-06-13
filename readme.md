## Installation and Setup Instructions

Clone down or copy this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm i`

* Upon first run will need to wait for driver installation. 
* Must allow network connection if prompted. 

To Run Test Suite:  

`npx wdio run ./wdio.conf.ts`  

To run on headless mode:

go to `playwright.config` and the `capabilitues` section and add:

  `'goog:chromeOptions': {
        args: ['headless', 'disable-gpu']
    }`

## Approach

Split the pages element on the folling files: 
* login
* products
* checkout
* overview


Instedad of just clicking the first element found on the producto list. The list is returned and the product is select by its index on the list. 

## Desitions

Consider to use `data-test` selector as default, when not possible used `id` instead. 
If any is not an option class may be usded. 

## Edge cases considered and handled.

By the time of this document this are the cases handled: 
* Empty user and password
* Worng user and password
* Loked out user
* Main Scenario: Validate product info on checkout overview


## Potential improvements and next steps

Next steps are: 
* Continue with not covered test cases 
* Split elements into other page classe to differ product details and shoping cart from producsts. 
* Export Report to HTML or PDF file. 
* Put the rest of the test data on the JSON test file
