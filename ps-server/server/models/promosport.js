'use strict';

module.exports = function (Promosport) {
    Promosport.validate('date', dateValidator, { message: 'endDate should be after startDate' });
    function dateValidator(err) {
        if (this.date >= this.finishDate) {
            err();
        }
    }

};
