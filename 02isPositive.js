"use strict";

const isPositive = function (n) {
  const overZero = "Yes";
  const zeroError = "Zero Error";
  const negativeError = "Negative Error";
  if (n > 0) {
    return overZero;
  } else if (n === 0) {
    throw zeroError;
  } else if (n < 0) {
    throw negativeError;
  }
};

isPositive(10);
isPositive(0);
