//                      Algorithms                                                Asliddin Kholturaev

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
    const veryNewArray = []

    for (let i = 0; i < newArr.length; i++) {
        const word = newArr[i]
        veryNewArray.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
    }
    return console.log(veryNewArray.join(" ")); 
}

capitalizeString('sHoRt AnD sToUt');




//  2-Matter_______________________________________ 

// --- Directions
// Write a function that splits an array (first argument)
// into groups the length of size (second argument) and
// returns them as a two-dimensional array.
// --- Examples
// chunk(["a", "b", "c", "d"], 2) --> [[ "a", "b"], ["c", "d"]]
// chunk([0, 1, 2, 3, 4, 5], 4) -->  [[0, 1, 2, 3], [4, 5]]


//  Solution

function chunk (arr, size) {
 let res = [];

 for(let i = 0; i < arr.length; i++){
    const item  =arr[i]
    const last = res[res.length-1]

    if(!last || last.length === size){
        res.push([item]);
    }
    else{
        res.push(item)
    }
 }
 return console.log(res);
}

chunk([0, 1, 2, 3, 4, 5, 6], 4)



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


function anagrams (stringA, stringB) {
    // this will remove empty and other elements from string input
    stringA = stringA.toLowerCase().replace(/[\W_]+/g,"");
    stringB = stringB.toLowerCase().replace(/[\W_]+/g,"");

    //  this will return if the length the strings are equal 

    if(stringA.length !== stringB.length){
        return console.log(false);
    }

    const stringAchartCount = {}

    for (let i = 0; i < stringA.length; i++){
        const aChart = stringA[i]
        // console.log(stringAchartCount[aChart]+1 | 1);
        stringAchartCount[aChart] = stringAchartCount[aChart] +1 | 1
        console.log(stringAchartCount[aChart]);
    }

    for (let i = 0; i < stringB.length; i++){
        const bChart = stringB[i]
        
        if(!stringAchartCount[bChart]){
            return console.log(false);
        }
        else{
            stringAchartCount[bChart]--;
        }
        return console.log(true); 
    }
}
anagrams("Asliddin", "niddilsa!")



//  Matter 4_______________________________________

//  Replace the first letter of the word with last letter of it

// Solution 

function exchangeChar (str){
    if(str.length == 1){
        return console.log(str); 
    }

    return console.log(str.substring(str.length -1) + str.substring(1, str.length-1) + str.substring(0,1));
}

exchangeChar("Asliddin")



//  Matter 5__________________________________________________

// Return True if str start with "mix", or m is optional , return true if there will be any number instead of "m"

// Solution

function mixFunc(str){
    if(str.substring(0,3) === "mix"){
        return console.log(true);
    }
    else if(str.substring(1,3) === "ix"){
        return console.log(true);
    }
    else{
        return console.log(false);
    }
}

mixFunc("mixFunx")



// Matter 6_________________________________________

// Return the largest number


function largestOne (a,b,c){
    if(a > b && a> c){
        return console.log(a);
    }
    else if (b> a && b> c){
        return console.log(b);
    }
    return console.log(c);
}

largestOne(10,9,15)




// Matter 7___________________________________________

//  Return the number which is close to 10

function close10 (a, b){
    if(Math.abs(a - 10) === Math.abs(b - 10) ){
        return console.log(0);
    }
    else if (Math.abs(a - 10) < Math.abs(b - 10) ){
        return console.log(a);
    }
    else if (Math.abs(a - 10) > Math.abs(b - 10) ) {
        return console.log(b); 
    }
}

close10(17, 13)



// Matter 8___________________________________________


function difference21(a){
    if(a > 21){
        return console.log(2*(a-21)); 
    }
    else if (a === 21){
        return console.log(0);
    }
    else{
        return console.log(21 - a);
    }
}


difference21(21)



// Matter 9___________________________________________

//  cut the first two letter of the string and put it at the beginning and ending of this string

function cutString (str){
    return console.log(str.substring(0,2) + str + str.substring(0,2));
}
cutString("abc")




// Matter 10___________________________________________

// return true if the 2 strings are anograms each other

function anogramsStr(stringA, stringB){
    stringA = stringA.toLowerCase().replace(/[\W_]+/g,"");
    stringB = stringB.toLowerCase().replace(/[\W_]+/g,"");

    const sortedA = stringA.split("").sort().join()
    const sortedB = stringB.split("").sort().join()
        return console.log(sortedA === sortedB);
}

anogramsStr("Asliddin", "niddilsa")



// Matter 11 _______________________________________________

//  Find the same last degit of the given numbers in argument

function lastDegit(a,b){
    
}
lastDegit(17, 17)

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


function letterShift (str, shift) {
    const alphabetArr = "abcdefghijklmnopqrstuvwxvz".split("")
    let res = ""

    for (let i =0; i < str.length; i++){
        let chart = str[i];
        let idx = alphabetArr.indexOf(chart)

        const codeIdx = (idx+shift) % 26
        res += alphabetArr[codeIdx]
    }
    return console.log(res); 

}
letterShift("gurer ner 9 qbtf", 6)



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


function hashTag(n){
    for(let i =1; i <= n; i++){
    let rest = ""
        // for(let hash = i; hash > 0; hash --){
        //     rest += "#"
        // }
        // for(let space = n-1; space > 0; space --){
        //     rest += " "
        // }
        rest+="#".repeat(i)
        rest+=" ".repeat(n-i)
    console.log(rest)
    }
}
hashTag(6)


function pyramid (m){
    for (let i = 1; i <= m; i ++){
        const padding = " ".repeat(m-i)
        const hashes = "#".repeat(i * 2 -1)

        console.log(padding + hashes + padding);
    }
}

pyramid(5)



// Matter 14 __________________________________

// Write a function that returns the number of vowels found within a string.
// Vowel characters are 'a', 'e', 'i', 'o', and 'u'.
// Make sure the function is case insensitive!
// --- Examples
//   vowels('What') --> 1
//   vowels('Why?') --> 0
//   vowels('aEiOu') --> 5
//   vowels('I am a world-class developer using iterations') --> 16

function numOfVowel(str){
    let num = 0;
    const vowels = "aeiou".split('')
    for (let i = 0; i < str.length; i++){
        const charta = str[i].toLowerCase()
        for(let b = 0; b < vowels.length; b++){
            const chartb = vowels[b]
            if (charta === chartb){
                num++;
            }
        }
    }
    return console.log(num);

}
numOfVowel("Mirafzal isA aaIIUU")


//  Matter 15 
//  Binary search

let sortedArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
let value = 10;

function binarySearch (sort, val){
    let left = 0;
    let right = sort.length-1

    while(left <= right){
        const mid = Math.floor((left+ right)/2);
        const midValue = sort[mid];
        if(midValue == val){
            return console.log(mid);
        } else if (midValue < val){
             left = mid+1
        }else{
             right = mid -1
        }
    }
    return -1
}

binarySearch(sortedArr,value)


//  Matter 16 ___________________________________________________
// Given a text and a pattern, write a function that shows
// how many times the pattern occurs in the text.
// stringPatternSearch("lollipop", "lol") --> 1
// stringPatternSearch("lolol", "lol") --> 2

function count (text, patern){
    let counter = 0;
    for(let i = 0; i < text.length; i ++){
        for(let b = 0; b < patern.length; b ++){
            let chart = patern[b]
            if(chart !== text[i+b]){ break;}
            if( b === patern.length - 1){ counter ++;}
        }
    }
    return console.log(counter)
}

count("lasvaslas", "as")


//  Matter 17 __________________________________

//  if we do not have a sort method How will we sort the array elements.

const arr = [10,9,8,7,6,5,4,3,2,1]
// Changing the position of array elements by their values
function snap (arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
//  Looping array and define the value and comparing them which one is bigger.
function sortArr (arr){
    for(let i = 0; i < arr.length; i ++){
        for(let j = 0; j < arr.length; j ++){
            if(arr[j] > arr[j+1]){
                snap(arr, j, j+1)
            }
        }
    }
    return arr
}

console.log(sortArr(arr)); // Asliddin 😅😉
