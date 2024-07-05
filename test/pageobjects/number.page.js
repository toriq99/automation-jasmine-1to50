const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class NumberPage extends Page {
    /**
     * define selectors using getter methods
     */
    async clickNumber(limit) {
        for (let number = 1; number <= limit; number++) {
            let element = await $(`//div[.='${number}']`);
            
            await element.click();
        }
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new NumberPage();
