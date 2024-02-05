//Check if type of '70' is equal to 70
typeof '70' === typeof 70 ? console.log(true) : console.log(false)
//Check if parseInt('8.8') is equal to 9
parseInt('8.8') === 9 ? console.log(true) : console.log(false)

/*Boolean value is either true or false.
Write five JavaScript statement which provide falsy value.
Write five JavaScript statement which provide truthy  value.
*/


// statments with falsy values
"" ? console.log('is truthy') : console.log('is falsy');

NaN ? console.log('is truthy') : console.log('is falsy');

0 ? console.log('is truthy') : console.log('is falsy');

undefined ? console.log('is truthy') : console.log('is falsy');

false ? console.log('is truthy') : console.log('is falsy')

// statments with truthy values

"yash" ? console.log('is truthy') : console.log('is falsy');

[] ? console.log('is truthy') : console.log('is falsy');

1 ? console.log('is truthy') : console.log('is falsy');

 "0" ? console.log('is truthy') : console.log('is falsy');

true ? console.log('is truthy') : console.log('is falsy')

/*
Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
5 > 4
4 >= 3
4 < 3
4 <= 3
5 == 5
9 === 9
9 == '9'
8 === '8'
4 != 4
4 !== 4
4 != '4'
4 != '4'
4 !== '4'
Find the length of python and jargon and make a falsy comparison statement.
*/
5 > 4 // true 
console.log(5 > 4);

4>=3 // true
console.log(4>=3);

4 < 3 // false
console.log(4 < 3);

5 == 5 // true
console.log(5 == 5);

9 === 9 // true 
console.log(9 === 9);

9 == '9' // true
console.log(9 == '9');

8 === '8' // false
console.log(8 === '8');

4 != 4 // false 
console.log(4 != 4);

4 !== 4 // false 
console.log(4 !== 4);

4 != '4' // false
console.log(4 != '4' );

4 !== '4' // true
console.log(4 !== '4' );

// Find the length of python and jargon and make a falsy comparison statement.

'python'.length > 'jargon'.length ? console.log('is truthy') : console.log('is falsy')

/* Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
There is no 'on' in both dragon and python */


4 > 3 && 10 < 12 // true 
console.log(4 > 3 && 10 < 12)

4 > 3 && 10 > 12 // false 
console.log(4 > 3 && 10 > 12)

4 > 3 || 10 < 12 // true 
console.log(4 > 3 && 10 < 12)

4 > 3 || 10 > 12 // true
console.log(4 > 3 || 10 < 12)

!(4 > 3) // false 
console.log(!(4 > 3))

!(4 < 3) // true
console.log(!(4 < 3))

!(false) // true
console.log(!(false))

!(4 > 3 && 10 < 12) // false
console.log(!(4 > 3 && 10 < 12))

!(4 > 3 && 10 > 12) // true 
console.log(!(4 > 3 && 10 > 12))


!(4 === '4') // false
console.log(!(4 === '4'))

//There is no 'on' in both dragon and python */  // false
console.log(!('python'.includes('on') && 'dragon'.includes('on')))















