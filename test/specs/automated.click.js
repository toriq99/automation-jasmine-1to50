const { expect } = require('@wdio/globals')
const numberPage = require('../pageobjects/number.page')

describe('Click with automation', () => {
    it('should click number 1 to 50 ', async () => {
        await numberPage.open();

        await numberPage.clickNumber(50);
    })
})

