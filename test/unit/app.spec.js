describe('app', function ()
{
    'use strict';

    var app = window.app;

    describe('reverseNumber', function () {
        it('should reverse the number', function () {
            expect(app.reverseNumber(1234)).toEqual(41);
        });
        it('should reverse the number from "number string"', function () {
            expect(app.reverseNumber('3334433')).toBe('4433344');
        });
        it('should not return a string', function () {
            expect(app.reverseNumber(1234)).not.toBe('4321');
        });
        it('should not accept not number as an argument', function () {
            expect(app.reverseNumber([])).toEqual(false);
        });
        it('should return single number', function () {
            expect(app.reverseNumber(5)).toBe(5);
        });
    });
});
