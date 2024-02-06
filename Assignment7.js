// If user is 18 or older , give feedback: 'You are allowed to Marry' but if not 18 console feedback stating to wait for the number of years he needs to turn 18.
const userAge = 17;
const yearsUntilTurning18 = 18 - userAge;
 userAge >= 18 ? console.log('You are allowed to Marry') : console.log(`wait for ${yearsUntilTurning18} year`);

 /* 
 2. Compare the values of myAge and yourAge. Based on the comparison and log the result to console stating who is older.
Enter your age: 30
You are 5 years older than me.
 */

const myAge = 21;
const yourAge = 22;

const ageDifference = Math.abs(myAge - yourAge );
myAge > yourAge ? console.log(`You are ${ageDifference} years younger than me`) :  (myAge < yourAge ? console.log(`You are ${ageDifference} years older than me`):console.log('we are of same age'));


/*
If myAge is greater than yourAge return 'yourAge is greater than myAge ' else 'myAge is less than yourAge'. Try to implement it in to ways.
*/

//1st way
myAge > yourAge ? console.log('yourAge is greater than myAge') :  (myAge < yourAge ? console.log(`myAge is less than yourAge`):console.log('we are of same age'));

// 2nd way
if(myAge > yourAge)
{
    console.log('yourAge is greater than myAge');
}

else if(myAge < yourAge) {
    console.log(`myAge is less than yourAge`);
}

else{
    console.log('we are of same age');
}


// Check, if a number is even or not.
 
const numberToCheck = 22;
 numberToCheck % 2 === 0 ? console.log('Number is even') : console.log('Number is odd');


 /*
Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
 */

const studentScore = 75;

switch(true){

case  studentScore >=80 && studentScore <=100 :
console.log('A')
break;

case  studentScore >=70 && studentScore<=89 :
console.log('B')
break;

case  studentScore >=60 && studentScore<=69 :
console.log('C')
break;

case  studentScore >=50 && studentScore<=59 :
console.log('D')
break;

case  studentScore > 100 || studentScore < 0 :
console.log('Invalid Score')
break;

default :
console.log('F')
break;

}


/*
Check if the season is Rainy, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Rainy.
December, January or February, the season is Winter.
March, the season is Spring
 April, May, June, July or August, the season is Summer
*/

const season = 'March'.toLowerCase();

switch(true){

case  season === 'september' || season === 'october' || season === 'november':
console.log('the season is Rainy.');
break;

case  season === 'december' || season === 'january' || season === 'february':
console.log('the season is Winter.');
break;

case  season === 'march' :
console.log('the season is spring.');
break;

case  season === 'april' || season === 'may' || season === 'june' || season === 'august':
console.log('the season is summer.');
break;


}


// Check if a day is weekend day or a working day. Your script will take day as an input.

const dayOfTheWeek = 'Friday'.toLowerCase();

dayOfTheWeek === 'monday' || 'tuesday' || 'wednesday' || 'thursday' || 'friday' ? console.log('its week day') : console.log('its weekend')


// Write a program which tells the number of days in a month.

const monthOfTheYear = 'February'.toLowerCase()

switch(true){

    case  monthOfTheYear === 'january' || monthOfTheYear === 'march' || monthOfTheYear === 'may'|| monthOfTheYear === 'july'|| monthOfTheYear === 'august' || monthOfTheYear === 'octomber' || monthOfTheYear === 'december':
    console.log('this month has 31 days.');
    break;
    
    case  monthOfTheYear === 'april' || monthOfTheYear === 'june' || monthOfTheYear === 'september'|| monthOfTheYear === 'november':
    console.log('this month has 30 days.')
    break;
    
    case  monthOfTheYear === 'february' :
    console.log('this month has 28 days');
    break;
    
    default : console.log('enter valid month');
    
    
    }
    
    // Write a program to check whether the year is leap year or not.

    const inputYear = 2024;

    inputYear % 4 === 0 ? console.log('its leap year') : console.log('its not leap year');


   /* 10. Write a JavaScript ternary expression that checks the following conditions:
If the first condition (condition1) is true, it should check the second condition (condition2). If condition2 is true, set the result to 'A', otherwise set it to 'B'.
If the first condition (condition1) is false, it should check another condition (condition3). If condition3 is true, set the result to 'C', otherwise set it to 'D'. */ 

const condition1 = true;
const condition2 = true;
const condition3 = false;

condition1 ? (condition2 ? console.log('A') : console.log('B')) : (condition3 ? console.log('C') : console.log('D'))

/*11. What will be the result of the following nested ternary expression:
let result = true ? false ? true ? 'A' : 'B' : false ? 'C' : 'D' : 'E';
console.log(result); */

let result = true ? false ? true ? 'A' : 'B' : false ? 'C' : 'D' : 'E';
console.log(result); // the result will be D here