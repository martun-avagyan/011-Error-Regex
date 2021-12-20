"use strict";

const regEx = /^([0-9]{4}|[0-9]{6})$/;

console.log(regEx.test(4444));
console.log(regEx.test(666666));
console.log(regEx.test(55555));
console.log(regEx.test(7777777));
console.log(regEx.test("asas"));
