//Declare a variable and assign a value 'Easy JavaScript Assignments'.

const javascriptAssignment = 'Easy JavaScript Assignments';

//  Print the length of the string

console.log(`Length of the String is ${javascriptAssignment.length}`);

// Change all the string characters to capital letters using toUpperCase() method

console.log(`Result of string ${javascriptAssignment} in upper case is  ${javascriptAssignment.toUpperCase()}`);

// Change all the string characters to lowercase letters using toLowerCase() method
console.log(`Result of string ${javascriptAssignment} in lower case is  ${javascriptAssignment.toLocaleLowerCase()}`);

// Slice out the first word of the string using substr() and substring() method
console.log(javascriptAssignment.substr(4,26));

console.log(javascriptAssignment.substring(4,27));

// Slice out the phrase JavaScript Assignments from 'Easy JavaScript Assignments'..
console.log(javascriptAssignment.slice(0,4));

// Check if the string contains a word Script using includes() method
console.log(javascriptAssignment.includes('Script'));

//Split the string into an array using split() method
console.log(javascriptAssignment.split(''));

// Split the string 'Easy JavaScript Assignments' at the space using split() method
console.log(javascriptAssignment.split(" "));

// 'ELTP, BATCH, THREE' split the string at the comma and change it to an array.
console.log('ELTP, BATCH, THREE'.split(","));

// Change 'Easy JavaScript Assignments' to 'Easy Python Assignments' using replace() method.
console.log(javascriptAssignment.replace('JavaScript' , 'Python'));

//What is character at index 20 in 'Easy JavaScript Assignments' string? Use charAt() method.
console.log(javascriptAssignment.charAt(20));

//What is the character code of J in 'Easy JavaScript Assignments' string using charCodeAt()
console.log(javascriptAssignment.charCodeAt('j'));

// Use indexOf to determine the position of the first occurrence of 'a' in 'Easy JavaScript Assignments'
console.log(javascriptAssignment.indexOf('a'));

// Use lastIndexOf to determine the position of the last occurrence of 'a' in 'Easy JavaScript Assignments'.
console.log(javascriptAssignment.lastIndexOf('a'));

// Use indexOf to find the position of the first occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
console.log('Easy JavaScript Assignments, Easy Easy'.indexOf('Easy'));

//Use lastIndexOf to find the position of the last occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
console.log('Easy JavaScript Assignments, Easy Easy'.lastIndexOf('Easy'));

// Use search to find the position of the first occurrence of the word 'Easy' in the following sentence: 'Easy JavaScript Assignments, Easy Easy'
console.log('Easy JavaScript Assignments, Easy Easy'.search('Easy'));

// Use trim() to remove any trailing whitespace at the beginning and the end of a string. '       Easy JavaScript Assignments, Easy Easy    
console.log('       Easy JavaScript Assignments, Easy Easy    '.trimStart());
console.log('       Easy JavaScript Assignments, Easy Easy    '.trimEnd());
console.log('       Easy JavaScript Assignments, Easy Easy    '.trim());

// Use startsWith() method with the string 'Easy JavaScript Assignments' and make the result true
console.log(javascriptAssignment.startsWith('Easy'));

// Use endsWith() method with the string 'Easy JavaScript Assignments' and make the result true
console.log(javascriptAssignment.endsWith('Assignments'));

// Use match() method to find all the a’s in 'Easy JavaScript Assignments'
console.log(javascriptAssignment.match(/a/g));
console.log(javascriptAssignment.match(/a/g).length);

// Use concat() and merge 'Easy' and 'JavaScript' to a single string.
console.log('Easy'.concat('JavaScript'));

// Use repeat() method to print 'Easy JavaScript' 3 times.
console.log('Easy JavaScript '.repeat(3)  );


//'Javascript is Easy, too Easy, too Easy, Easy to learn' Count the number of word 'Easy' in this sentence.
console.log('Javascript is Easy, too Easy, too Easy, Easy to learn'.split('Easy').length -1);

// Use match() to count the number of all 'Easy' in the following sentence:'Javascript is Easy, too Easy, too Easy, Easy to learn'
console.log('Javascript is Easy, too Easy, too Easy, Easy to learn'.match(/Easy/g).length );

// 28. Calculate the total annual income of the person by extracting the numbers from the following text. 'I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, and 50000 euro from trading'

const totalSalary = 'I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, and 50000 euro from trading'.match(/\d+/g);
console.log((+totalSalary[0] + +totalSalary[2]) + +totalSalary[1] + +totalSalary[3]);