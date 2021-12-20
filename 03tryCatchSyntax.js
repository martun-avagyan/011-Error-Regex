"use strict";

const tryCatchSyntax = function (str) {
  const newStr = "";
  try {
    newStr = str.split("").reverse.join("");
  } catch (error) {
    console.log("s.split is not a function");
  }
};

tryCatchSyntax(false);
