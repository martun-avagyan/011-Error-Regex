"use strict";

const reverseFunction = function (str) {
  const originalStr = str;
  let toReturn = "";
  try {
    toReturn = str.split("").reverse().join("");
  } catch (error) {
    console.log(
      `Type ${(typeof str).toUpperCase()} is a wrong type of parameter. Please input a string.`
    );
    console.log(originalStr);
    return originalStr;
  }
  return toReturn;
};
const myNum = 1413621;
const myStr = "puppy";
reverseFunction(myNum); // Empty log since the catch block did not work
console.log(reverseFunction(myStr));
