"use strict";
exports.__esModule = true;
var obj = {};
/**
 * Slider Calculators
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function calculateTotal(value, id) {
    obj[id] = value;
    return Object.keys(obj).reduce(function (acc, key) {
        return obj[key] + acc;
    }, 0);
}
exports.calculateTotal = calculateTotal;
function calculateData(data, row, newVal) {
    return data.map(function (e) {
        return e.id === row.id ? {
            id: row.id,
            value: newVal,
            name: row.name
        } : e;
    });
}
exports.calculateData = calculateData;
function resetTotal() {
    obj = {};
}
exports.resetTotal = resetTotal;
