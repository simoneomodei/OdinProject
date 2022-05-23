function add7(number) {
  return number + 7;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function capitalize(string) {
  let str = string.toLowerCase();
  let uppStr = "";
  let letter = "";

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      letter = str.charAt(i).toUpperCase();
    } else {
      letter = str.charAt(i);
    }
    uppStr = uppStr.concat(letter);
  }

  return uppStr;
}

function lastLetter(string) {
  return string[string.length - 1];
}

let number = 10;

let num1 = 5;
let num2 = 6;

let string1 = "jolly";
let string2 = "UPPERCASE";
let string3 = "VaRiableCases";

console.log(add7(number));

console.log(multiply(num1, num2));

console.log(capitalize(string1));
console.log(capitalize(string2));
console.log(capitalize(string3));

console.log(lastLetter(string1));
console.log(lastLetter(string2));
console.log(lastLetter(string3));
