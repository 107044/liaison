"use strict";
const fs = require("fs");//讀檔
var  path = "./sql/";

module.exports = {
    readsql: (fileName, callback) => {
        var fullpath = path + fileName;
        var result = '';
        console.log(fullpath);
        result = fs.readFileSync(fullpath,'utf8');
        return result;
    }
}