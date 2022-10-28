//                      Algorithms                                                Asliddin Kholturaev

const { log } = require("console");

//  1-Matter________________________________________

// Write a function that returns the provided string with
// the first letter of each word capitalized. Make sure the
// rest of the word is in lower case.
// --- Examples
//   capitalize("I'm a little tea pot") --> 'I'm A Little Tea Pot'
//   capitalize('sHoRt AnD sToUt') --> 'Short And Stout'

// Solution

function capitalizeString(str) {
  const newArr = str.split(" ");
  const veryNewArray = [];

  for (let i = 0; i < newArr.length; i++) {
    const word = newArr[i];
    veryNewArray.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }
  return console.log(veryNewArray.join(" "));
}

capitalizeString("sHoRt AnD sToUt");

//  2-Matter_______________________________________

// --- Directions
// Write a function that splits an array (first argument)
// into groups the length of size (second argument) and
// returns them as a two-dimensional array.
// --- Examples
// chunk(["a", "b", "c", "d"], 2) --> [[ "a", "b"], ["c", "d"]]
// chunk([0, 1, 2, 3, 4, 5], 4) -->  [[0, 1, 2, 3], [4, 5]]

//  Solution

function chunk(arr, size) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const last = res[res.length - 1];

    if (!last || last.length === size) {
      res.push([item]);
    } else {
      res.push(item);
    }
  }
  return console.log(res);
}

chunk([0, 1, 2, 3, 4, 5, 6], 4);

//  3-Matter___________________________________________

// Check if two strings are anagrams of each other.
// One string is an anagram of another if it uses exact same characters
// in exact same quantity. Only consider word characters, and make sure the
// function is case insensitive.
// --- Examples
//   anagrams('heart', 'earth') --> True
//   anagrams('heart', '  earth') --> True
//   anagrams('Heart!', 'EARTH') --> True
//   anagrams('lol', 'lolc') --> False

function anagrams(stringA, stringB) {
  // this will remove empty and other elements from string input
  stringA = stringA.toLowerCase().replace(/[\W_]+/g, "");
  stringB = stringB.toLowerCase().replace(/[\W_]+/g, "");

  //  this will return if the length the strings are equal

  if (stringA.length !== stringB.length) {
    return console.log(false);
  }

  const stringAchartCount = {};

  for (let i = 0; i < stringA.length; i++) {
    const aChart = stringA[i];
    // console.log(stringAchartCount[aChart]+1 | 1);
    stringAchartCount[aChart] = (stringAchartCount[aChart] + 1) | 1;
    console.log(stringAchartCount[aChart]);
  }

  for (let i = 0; i < stringB.length; i++) {
    const bChart = stringB[i];

    if (!stringAchartCount[bChart]) {
      return console.log(false);
    } else {
      stringAchartCount[bChart]--;
    }
    return console.log(true);
  }
}
anagrams("Asliddin", "niddilsa!");

//  Matter 4_______________________________________

//  Replace the first letter of the word with last letter of it

// Solution

function exchangeChar(str) {
  if (str.length == 1) {
    return console.log(str);
  }

  return console.log(
    str.substring(str.length - 1) +
      str.substring(1, str.length - 1) +
      str.substring(0, 1)
  );
}

exchangeChar("Asliddin");

//  Matter 5__________________________________________________

// Return True if str start with "mix", or m is optional , return true if there will be any number instead of "m"

// Solution

function mixFunc(str) {
  if (str.substring(0, 3) === "mix") {
    return console.log(true);
  } else if (str.substring(1, 3) === "ix") {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

mixFunc("mixFunx");

// Matter 6_________________________________________

// Return the largest number

function largestOne(a, b, c) {
  if (a > b && a > c) {
    return console.log(a);
  } else if (b > a && b > c) {
    return console.log(b);
  }
  return console.log(c);
}

largestOne(10, 9, 15);

// Matter 7___________________________________________

//  Return the number which is close to 10

function close10(a, b) {
  if (Math.abs(a - 10) === Math.abs(b - 10)) {
    return console.log(0);
  } else if (Math.abs(a - 10) < Math.abs(b - 10)) {
    return console.log(a);
  } else if (Math.abs(a - 10) > Math.abs(b - 10)) {
    return console.log(b);
  }
}

close10(17, 13);

// Matter 8___________________________________________

function difference21(a) {
  if (a > 21) {
    return console.log(2 * (a - 21));
  } else if (a === 21) {
    return console.log(0);
  } else {
    return console.log(21 - a);
  }
}

difference21(21);

// Matter 9___________________________________________

//  cut the first two letter of the string and put it at the beginning and ending of this string

function cutString(str) {
  return console.log(str.substring(0, 2) + str + str.substring(0, 2));
}
cutString("abc");

// Matter 10___________________________________________

// return true if the 2 strings are anograms each other

function anogramsStr(stringA, stringB) {
  stringA = stringA.toLowerCase().replace(/[\W_]+/g, "");
  stringB = stringB.toLowerCase().replace(/[\W_]+/g, "");

  const sortedA = stringA.split("").sort().join();
  const sortedB = stringB.split("").sort().join();
  return console.log(sortedA === sortedB);
}

anogramsStr("Asliddin", "niddilsa");

// Matter 11 _______________________________________________

//  Find the same last degit of the given numbers in argument

function lastDegit(a, b) {}
lastDegit(17, 17);

// Matter 12______________________________________________________

// Given a phrase, substitute each character by shifting it up
// the alphabet by a given integer. If necessary, the shifting
// should wrap around back to the beginning of the alphabet.
// Make sure the function only shifts letters.
// --- Examples
// caeserCipher("abcd", 1) === "bcde";
// caeserCipher("yz", 1) === "za";
// caeserCipher("abcd", 100) === "wxyz";
// caeserCipher("gurer ner 9 qbtf!", 13) === "there are 9 dogs!"

function letterShift(str, shift) {
  const alphabetArr = "abcdefghijklmnopqrstuvwxvz".split("");
  let res = "";

  for (let i = 0; i < str.length; i++) {
    let chart = str[i];
    let idx = alphabetArr.indexOf(chart);

    const codeIdx = (idx + shift) % 26;
    res += alphabetArr[codeIdx];
  }
  return console.log(res);
}
letterShift("gurer ner 9 qbtf", 6);

// Matter 13 ______________________________________

// Write a function that takes a number N.
// Over multiple lines it should console log a step shape
// with N levels using the # character. Be sure to notice
// how each step has some number of empty spaces to the right!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function hashTag(n) {
  for (let i = 1; i <= n; i++) {
    let rest = "";
    // for(let hash = i; hash > 0; hash --){
    //     rest += "#"
    // }
    // for(let space = n-1; space > 0; space --){
    //     rest += " "
    // }
    rest += "#".repeat(i);
    rest += " ".repeat(n - i);
    console.log(rest);
  }
}
hashTag(6);

function pyramid(m) {
  for (let i = 1; i <= m; i++) {
    const padding = " ".repeat(m - i);
    const hashes = "#".repeat(i * 2 - 1);

    console.log(padding + hashes + padding);
  }
}

pyramid(5);

// Matter 14 __________________________________

// Write a function that returns the number of vowels found within a string.
// Vowel characters are 'a', 'e', 'i', 'o', and 'u'.
// Make sure the function is case insensitive!
// --- Examples
//   vowels('What') --> 1
//   vowels('Why?') --> 0
//   vowels('aEiOu') --> 5
//   vowels('I am a world-class developer using iterations') --> 16

function numOfVowel(str) {
  let num = 0;
  const vowels = "aeiou".split("");
  for (let i = 0; i < str.length; i++) {
    const charta = str[i].toLowerCase();
    for (let b = 0; b < vowels.length; b++) {
      const chartb = vowels[b];
      if (charta === chartb) {
        num++;
      }
    }
  }
  return console.log(num);
}
numOfVowel("Mirafzal isA aaIIUU");

//  Matter 15
//  Binary search

let sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let value = 10;

function binarySearch(sort, val) {
  let left = 0;
  let right = sort.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = sort[mid];
    if (midValue == val) {
      return console.log(mid);
    } else if (midValue < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

binarySearch(sortedArr, value);

//  Matter 16 ___________________________________________________
// Given a text and a pattern, write a function that shows
// how many times the pattern occurs in the text.
// stringPatternSearch("lollipop", "lol") --> 1
// stringPatternSearch("lolol", "lol") --> 2

function count(text, patern) {
  let counter = 0;
  for (let i = 0; i < text.length; i++) {
    for (let b = 0; b < patern.length; b++) {
      let chart = patern[b];
      if (chart !== text[i + b]) {
        break;
      }
      if (b === patern.length - 1) {
        counter++;
      }
    }
  }
  return console.log(counter);
}

count("lasvaslas", "as");

//  Matter 17 __________________________________

//  if we do not have a sort method How will we sort the array elements.
// Bubble Sorting

const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// Changing the position of array elements by their values
function snap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
//  Looping array and define the value and comparing them which one is bigger.
function sortArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        snap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

console.log(sortArr(arr)); // Asliddin 😅😉

//  Matter 18
// Selection Sorting

const arr2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// Changing the position of array elements by their values
function snap2(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function selectionSorting(arr) {
  for (let i = 0; i < arr.length; i++) {
    let catchSmaller = i;
    for (let a = i + 1; a < arr.length; a++) {
      if (arr[a] < arr[catchSmaller]) {
        catchSmaller = a;
      }
    }

    snap2(arr, i, catchSmaller);
  }
  return console.log(arr);
}
selectionSorting(arr2);

//EXTRA_____________________________

function numberA(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    // if(i){
    //     break;
    // }
    arr.push(`${i + 1} : ${array[i]}`);
  }
  return console.log(arr);
}
numberA(["a", "b", "c"]);

function capitalizeLitter(str) {
  let arr = str.split("");

  let newStr = arr.join("");
  return console.log(newStr);
}
capitalizeLitter("hello i am Asliddin");

// Matter 19_________________________________________________

function span(arr, i, b) {
  let templ = i;
  arr[i] = arr[b];
  arr[b] = templ;
}

function sortIt(arr1, arr2) {
  let newArr = [...arr1, ...arr2];
  for (let i = 0; i < newArr.length; i++) {
    for (let b = 0; b < newArr.length; b++) {
      if (arr[i] > arr[b]) {
        span(arr, i, b);
      }
    }
  }
  return console.log(newArr);
}
sortIt([1, 2, 3, 4], [10, 11, 12, 13]);

// Matter-20_____________________

function likeOrDislike(buttons) {
  let sumOfLike = 0;
  let sumOfDislike = 0;
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i] == "Like") {
      sumOfLike += 1;
    } else if (buttons[i] == "Dislike") {
      sumOfDislike += 1;
    }
  }
  if (sumOfLike % 2 == 0 && sumOfDislike % 2 > 0) {
  }
}
likeOrDislike(["Like", "Like", "Dislike", "Like"]);

//   0, 1, 1, 2, 3, 5, 8,

function findNextInt(firstNum, secondNum, allNum) {
  let arr1 = [firstNum, secondNum];

  let nextNum = null;
  for (let i = 0; i < allNum - 2; i++) {
    nextNum = arr1[i] + arr1[i + 1];
    arr1.push(nextNum);
    if (nextNum % 2 !== 0 && nextNum % 3 !== 0) {
      console.log(`${nextNum} bu toq`);
    }
  }
  return console.log(arr1);
}

findNextInt(0, 1, 20);

// -------------------------

let sanoq = [
  "Bir",
  "ikki",
  "Uch",
  "Turt",
  "Besh",
  "Olti",
  "Yetti",
  "Sakkiz",
  "To`qqiz",
];
let onlik = [
  "O'n",
  "Yigirma",
  "Uttiz",
  "Qirq",
  "Ellik",
  "Oltmish",
  "Yetmish",
  "Sakson",
  "To`qson",
];

function numToLetter(num) {
  let numToSting = String(num);
  let letters;
  if (+numToSting[1] !== 0 && +numToSting[2] !== 0) {
    letters = `${sanoq[+numToSting[0] - 1]} yuz ${onlik[+numToSting[1] - 1]} ${
      sanoq[+numToSting[2] - 1]
    }`;
  } else if (+numToSting[1] == 0 && +numToSting[2] !== 0) {
    letters = `${sanoq[+numToSting[0] - 1]} yuz ${sanoq[+numToSting[2] - 1]}`;
  } else if (+numToSting[2] == 0 && +numToSting[1] !== 0) {
    letters = `${sanoq[+numToSting[0] - 1]} yuz ${onlik[+numToSting[1] - 1]}`;
  } else if (+numToSting[1] == 0 && +numToSting[2] == 0) {
    letters = `${sanoq[+numToSting[0] - 1]} yuz`;
  }
  return letters;
}

console.log(numToLetter(900));

//  ------------------- Febonachi sequence --------------

function febonachi(n) {
  const arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return console.log(arr);
}
febonachi(2);
febonachi(3);
febonachi(7);

//

function kabisa(n) {
  if (n % 400 == 0) {
    return console.log(366);
  } else if (n % 4 == 0 && n % 100 != 0) {
    return console.log(366);
  } else {
    return console.log(365);
  }
}
kabisa(300);

// Factorial numbers

// function findFactorial(n) {
//   let mul = n;
//   if (n == 0) {
//      mul = 1
//   }
//   for (let i = n - 1; i > 0; i--) {
//     mul = mul * i;
//   }
//   return console.log(mul);
// }
// findFactorial(1);

// The best solution. This is a linear time complexity O(n)

function findFactorial2(n) {
  let fac = 1;
  for (let i = 2; i <= n; i++) {
    fac *= i;
  }
  return console.log(fac);
}
findFactorial2(0);
findFactorial2(4);
findFactorial2(5);

// Find the prime number. This is a linear time complexity O(sqrt(n))

function primeNumber(p) {
  if (p == 1) {
    return console.log(false);
  }
  for (let i = 2; i <= Math.sqrt(p); i++) {
    if (p % i == 0) {
      return console.log(false);
    }
  }
  return console.log(true);
}
primeNumber(1);
primeNumber(4);
primeNumber(5);

// Loop
let i = 0;
for (; i < 3; i++) {
  console.log(i);
}
console.log(i);

// Infitie loops be like that
// for(;;){
//   console.log(yellow);
// }

// while(true){
//   console.log(chellow);
// }

function yeah(n) {
  outer: for (let i = 0; i < 10; i++) {
    for (let k = 0; k < 10; k++) {
      if (n % 2 !== 0) break outer;
      console.log(`[${i} : ${k}]`);
    }
  }
}

yeah(2);

// a > b
// function foo(a, b) {
//   while (a - b < b) {
//     if (a - b < b) {
//       return console.log(a - b);
//     }

//     a = a - b;
//   }
// }
// foo(5, 2);

//  Recursion function

function recursion(count) {
  console.log(count);
  let nextNum = count - 1;
  if (nextNum > 1) {
    recursion(nextNum);
  }
  console.log(count);
}
recursion(3);

function febonachis(num) {
  if (num < 2) {
    return num;
  }
  let sum = febonachis(num - 1) + febonachis(num - 2);
  console.log(sum);
  return sum;
}

console.log(febonachis(9));
console.log(febonachis(1));
console.log(febonachis(7));

// Factorial

function fac(n) {
  if (n == 0) {
    return 1;
  }
  return n * fac(n - 1);
}

console.log(fac(5));

//  Linear Search

function search(n, t) {
  for (let i = 0; i < n.length; i++) {
    if (n[i] === t) {
      return i;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6, 7], 7));
console.log(search([1, 2, 3, 4, 5, 6, 7], 10));

//  Binary Search

function binarySearch2(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch2([1, 2, 3, 4, 5, 6, 7], 10));

//  Time complexity of this matter is O(lgn)

//  bubble sort algo
const arrs = [11, 23, 43, 1, 3, -10];
function sortAlgo(arr) {
  let statuses;
  do {
    statuses = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        statuses = true;
      }
    }
  } while (statuses);
}
sortAlgo(arrs);
console.log(arrs);

//  Square the numbers  2345 => 491425

function squareDigits(num) {
  let str = String(num);
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= arr[i];
  }

  return Number(arr.join(""));
}

console.log(squareDigits(2345));

// quadratic shape

function generateShape(integer) {
  let str = "";
  for (let j = 1; j <= integer; j++) {
    for (let i = 1; i <= integer; i++) {
      str += "+";
      if (i == integer && i !== j) {
        str += "\n";
      }
    }
  }

  return console.log(str);
}

generateShape(5);
// Best practice of it
function generateShape2(n) {
  return ("+".repeat(n) + "\n").repeat(n).trim();
}
console.log(generateShape2(5));

// revert order

function descendingOrder(n) {
  return Number(("" + n).split("").sort().reverse().join(""));
}
console.log(descendingOrder(3456));

console.log(descendingOrder(231425));

// Has unique character

function hasUniqueChars(str) {
  for (let i = 0; i < str.length; i++) {
    for (let b = 0; b < str.length; b++) {
      if (str[i] === str[b]) {
        return false;
      }
      return true;
    }
  }
}
console.log(hasUniqueChars("absd"));

// Sum of even numbers

function sumEvenNumbers(input) {
  let sum = 0;
  if (input.length === 0) {
    return 0;
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 == 0) {
      sum += input[i];
    }
  }
  return sum;
}

sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//  polendrom Numbers

function isPolindrom(n) {
  if (Number(("" + n).split("").reverse().join("")) === n) {
    return true;
  }
  return false;
}
console.log(isPolindrom(1331));

//  NUmber of divisors of number

function getDivisorsCnt(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      sum += 1;
    }
  }
  return sum;
}

console.log(getDivisorsCnt(7));

// Number array to string

function toNumberArray(stringarray) {
  for (let i = 0; i < stringarray.length; i++) {
    stringarray[i] = +stringarray[i];
  }
  return stringarray;
}

console.log(toNumberArray(["1", "2", "4", "5"]));

const toNumberArray2 = (stringarray) => stringarray.map(Number);

console.log(toNumberArray2(["1", "2", "4", "5"]));

//

function howManyGifts(maxBudget, gifts) {
  let sortArr = gifts.sort((a, b) => a - b);
  let sum = 0;
  let effort = 0;
  for (let i = 0; i < sortArr.length; i++) {
    sum += sortArr[i];
    if (sum >= maxBudget) {
      return i;
    }
  }

  return effort;
}

console.log(
  howManyGifts(20, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
);

// How many "o" and "x" in staring
function xo(str) {
  let xs = 0;
  let os = 0;
  let str2 = str.toLowerCase();
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === "o") {
      os += 1;
    }
    if (str2[i] === "x") {
      xs += 1;
    }
  }
  if (xs === os) {
    return true;
  } else {
    return false;
  }
}
console.log(xo("ooXxOx"));

// optimal solution
const xo = (str) => {
  str = str.toLowerCase().split("");
  return (
    str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
  );
};

// Reverse order instead
reverse = function (array) {
  var newArr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
};

// Has a unique value

function hasUniqueChars(str) {
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        return false;
      }
    }
  }

  return true;
}

// Optimal matter
let hasUniqueChars = (str) => new Set(str).size === str.length;

// find the cooredinates fot the "x" if it is not exist or more than one return []

const xMarksTheSpot = (input) => {
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    for (let b = 0; b < input[i].length; b++) {
      if (input[i][b] === "x") {
        arr.push(i);
        arr.push(b);
        x += 1;
      }
    }
  }
  if (arr.length == 2) {
    return arr;
  } else {
    return [];
  }
};

xMarksTheSpot(["o", "o"], ["o", "x"]); // [1, 1]

//  k = 3, n = 1,3,4,5,6,0

// Add count by order to array elements

// [1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]

// [4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
//  9+3 = 12  -->  2

function incrementer(nums) {
  let arr = nums;
  if (arr.length == 0) {
    return [];
  }
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i] + (i + 1);
    if (sum > 9) {
      arr[i] = Number(("" + sum).slice(-1));
    } else {
      arr[i] = sum;
    }
  }
  return console.log(arr);
}
incrementer([4, 6, 9, 1, 3]);

// optimal solutions

function incrementer(num) {
  return num.map((a, i) => (a + i + 1) % 10);
}

var incrementer = (a) => a.map((a, i) => +(a + i + 1 + "").slice(-1));

// jump up
function solution(start, finish) {
  return Math.round(finish / 3);
}

//  Increasing the population
//  have some bug
function nbYear(p0, percent, aug, p) {
  let year = 0;
  for (let i = p0; i <= p; i++) {
    let sum = p0 + p0 * (percent / 100) + aug;
    p0 = sum;
    year += 1;
  }
  return year;
}
console.log(nbYear(1500, 5, 100, 5000));

//  Quick sort

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let target = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (target > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), target, ...quickSort(right)];
}

console.log(quickSort([-5, -8, -1, 9, 4, 6]));

// Arefmetic progression

function progression(arr) {
  let p = arr[1] - arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + p == arr[i + 1]) {
      p = p;
    } else {
      return 0;
    }
  }
  return p;
}
console.log(progression([-2, 3, 8, 13, 18]));

function digitalRoot(n) {
  let sum = n;
  while (sum > 9) {
    sum = ("" + sum).split("").reduce((a, b) => +a + +b);
  }

  return sum;
}

console.log(digitalRoot(456));


// ----------------------29 - Oktabr--------------------------------


// Algo 1
//  Write a function that accepts an integer n and a string s as parameters,
//and returns a string of s repeated exactly n times.
function repeatStr(n, s) {
  return s.repeat(n);
}
repeatStr(5, "hello");

function check(a, x) {
  let index = a.indexOf(x);
  return index == -1 ? false : true;
}

console.log(check(["1", "a", "4", "y"], "m"));




// Algo 2

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
  let index = a.indexOf(x);
  return index == -1 ? false : true;
}
