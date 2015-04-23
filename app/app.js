(function ()
{
    'use strict';

    window.app = {
        reverseNumber: function (num) {
            if (isNaN(num)) {
                return false;
            }
            num += '';
            return parseInt(num.split('').reverse().join(''));
        }
    };
})();
