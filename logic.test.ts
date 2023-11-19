import {Logic} from "./logic.ts";

describe('Logic', () => {
    describe('Calculate discount in percent', () => {
        it('should return 10 when price is 100 and discount is 10', async () => {
            const price = 100;
            const discount = 10;
            const expected = 10;
            const actual = await Logic.calculateDiscountInPercent(price, discount);
            expect(actual).toBe(expected);
        })

        it('should return 0 when price is 100 and discount is 0', async () => {
            const price = 100;
            const discount = 0;
            const expected = 0;
            const actual = await Logic.calculateDiscountInPercent(price, discount);
            expect(actual).toBe(expected);
        })

        it('should return 0 when price is 0 and discount is 10', async () => {
            const price = 0;
            const discount = 10;
            const expected = 0;
            const actual = await Logic.calculateDiscountInPercent(price, discount);
            expect(actual).toBe(expected);
        })


    });
});