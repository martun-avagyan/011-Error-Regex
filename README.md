# 011 Error Regex

- ### [01. Reverse String Function](https://github.com/martun-avagyan/011-Error-Regex/blob/main/01reverseString.js)

Complete the reverseString function, it has one parameter s. You must perform the following actions:

1. Try to reverse string s using the split, reverse, and join methods.
2. If an exception is thrown, catch it and print the contents of the exception's message on a new line.
3. Print s on new line. If no exception was thrown, then this should be the reversed string, if an exception was thrown, this should be the original string.
   Input Format
   Locked stub code in the editor reads variable s from stdin and passes it to the function.
   Output Format
   You must write two print statements using console.log():

- Print the contents of a caught exception's message on a new line. If no exception was thrown, this
  line should not be printed.
- Print s on a new line. If no exception was thrown, then this should be the reversed string, if an
  exception was thrown, this should be the original string.

```
Input
Number(1234)
Output
s.split is not a function
```

### [02. Is Positive](https://github.com/martun-avagyan/011-Error-Regex/blob/main/02isPositive.js)

- Complete the isPositive function below. It has one integer parameter a . If the value of a is positive, it must
  return the string YES. Otherwise, it must throw an Error according to the following rules:

* If a is 0, throw an Error with message = Zero Error.
* If a is negative, throw an Error with message = Negative Error.

### [03. Convert Using Try Catch](https://github.com/martun-avagyan/011-Error-Regex/blob/main/03tryCatchSyntax.js)

- Convert the code using try...catch.

```
function reverseString(s) {
typeOf s !== "string"
? console.log("s.split is not a function")
: (s = s.split("").reverse().join(""));
console.log(s);
}
```

### [04. Grade Labs](https://github.com/martun-avagyan/011-Error-Regex/blob/main/04gradeLabs.js)

- A teacher has created a gradeLabs function that verifies if student programming labs work. This function
  loops over an array of JavaScript objects that should contain a student property and runLab property.
  The runLab property is expected to be a function containing the student's code. The runLab function is
  called and the result is compared to the expected result. If the result and expected results don't match,
  then the lab is considered a failure.

### [05. Reg Ex](https://github.com/martun-avagyan/011-Error-Regex/blob/main/05regExp.js)

- Create a RegExp myRegExp to test if a string is a valid pin or not.
- A valid pin has:
- Exactly 4 or 6 characters.
- Only numerical characters (0-9).
- No whitespace.

### [06. Reg Ex Validation](https://github.com/martun-avagyan/011-Error-Regex/blob/main/06regExCode.js)

- Write an expression to validate

```
const REGEXP = /abc/;
let str = '<> <a href="/"> <input type="radio" checked> <b>';
str.match(REGEXP);
'<a href="/">', '<input type="radio" checked>', "<b>";
```
