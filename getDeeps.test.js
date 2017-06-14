const getDeps = require("./getDeeps");
var kt1 = {
    a: 10,
    v: {
        d: 12
    }
};
var kt2 = {
    asd: 123,
    asd: 12,
    d: {
        a: "asd",
        d: kt1
    }
};
kt1.v.d.kr = kt2;
let obj = {
    a: 1,
    v: {
        b:2,
        kt1
    }
};
console.log(getDeps(obj));