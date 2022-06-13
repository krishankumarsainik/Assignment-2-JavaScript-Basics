console.clear();


// Question 1:
// Write a program to search if a number exists in an array. If the number exists then return the position. If it exists multiple time then return an array with all the positions. If the number doesn't exist then return -1;
// For example,
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// Output: 3
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// Output: [0, 5]
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// Output: -1
var Numbers = ["1", "2", "3", "4", "5", "6",]
let position = Numbers.indexOf("4");
console.log("Position Of 4 is =" + position);

var Numbers = ["1", "2", "3", "4", "1", "6",]
let position1 = Numbers.indexOf("1");
let positio2 = Numbers.lastIndexOf("1");
console.log("Position Of 1 is = " + position1 + "&" + positio2);

var Numbers = ["1", "2", "3", "4", "5", "6",]
let position3 = Numbers.indexOf("7");
console.log("Position Of 4 is = " + position3);

console.log("Q1 END =====================")


// Question 2:
// Write a program to print following pattern in the console.
// 54321
// 5432
// 543
// 54
// 5

var arr = [1, 2, 3, 4, 5]
for (var i = 0; i <= arr.length; i++) {
    var str = ""

    for (var j = arr.length - 1; j >= i; j--) {
        str += arr[j]
    }
    console.log(str)

}

console.log("Q2 END =====================")




// Question 3:
// Write a JavaScript program to sort an array in ascending order
// For example,
// Input: [3, 2, 1, 4, 5, 45]
// Output: [1, 2, 3, 4, 5, 45]

function sorter(num1, num2) {
    return num1 - num2;
}

var arr = [1, 2, 3, 4, 5, 45]

var result = arr.sort(sorter)
console.log(result)
console.log("Q3 END =====================")


// Question 4:
// Write a JavaScript program to check if two strings are anagrams. Anagram string are such two strings which can be rearranged to create one another.
// For example,
// Input: LISTEN and SILENT
// Output: True
// Input: HELLO and JELLO
// Output: False
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const object = {};
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        object[char] = object[char] ? object[char] += 1 : object[char] = 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let char = str2[i];
        if (!object[char]) {
            return false;
        }
        else {
            object[char] = -1;
        }
    }
    return true;
}

console.log(isAnagram('LISTEN', 'SILENT'));




console.log("Q4 END =====================")


// Question 5:
// Write a JavaScript program to reverse a string without using inbuilt methods.
// For example,
// Input: Hello
// Output: olleH

var str = "Hello"
var str2 = ""
for (var i = str.length - 1; i >= 0; i--) {
    str2 += str[i]
}
console.log(str2)
console.log("Q5 END =====================")