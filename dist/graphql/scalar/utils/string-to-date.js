"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stringToDate = (date) => {
    const parsedDate = new Date(date);
    if (!isNaN(parsedDate.getTime())) {
        return parsedDate;
    }
};
exports.default = stringToDate;
