"use strict";

const tryCatchSyntax = function (str) {
  let newStr;

  try {
    newStr = str.split("").reverse().join("");
  } catch (error) {
    console.log("s.split is not a function");
  }
  return newStr;
};
tryCatchSyntax(true);
console.log(tryCatchSyntax("asasas"));
