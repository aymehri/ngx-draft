'use strict';

module.exports = function(Team) {
    Team.validatesLengthOf('name', {max: 100, message: {max: 'Name is too long'}});

};
