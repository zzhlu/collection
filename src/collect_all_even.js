'use strict';

function collect_all_even(collection) {
    var newArray = [];

    collection.forEach(function (element) {
        if (element % 2 === 0) {
            newArray.push(element);
        }
    });

    return newArray;
}

module.exports = collect_all_even;