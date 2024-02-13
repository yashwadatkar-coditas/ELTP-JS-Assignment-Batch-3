const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']


  // Iterate 0 to 10 using for loop, do the same using while and do while loop

  for(let value = 0 ; value<=10;value++)
  {
    console.log(value)
  }

  let value = 0
  while(value<10)
  {
    console.log(value)
    value++
  }

  do {
    console.log(value)
    value++
  }while(value<=10)


  // Iterate 10 to 0 using for loop, do the same using while and do while loop

  for(let value = 10 ; value>=0;value--)
  {
    console.log(value)
  }

  let newValue = 10
  while(newValue>0)
  {
    console.log(newValue)
    newValue --
  }



do {
    console.log(newValue);
    newValue--;
  } while (newValue > 0);

  // Iterate 0 to n using for loop

  function iterateTheLoop (n)
  {
    for(let value = 0 ; value <= n;value++)
    {
        console.log(value)
     

    }
  }

  iterateTheLoop(5)


  /*
Write a loop that makes the following pattern using console.log():
    #
    ##
    ###
    ####
    #####
    ######
    #######
  */


    for (let outerLoopIndex = 0; outerLoopIndex < 7; outerLoopIndex++) {
        let row = '';
        for (let innerLoopIndex = 0; innerLoopIndex <= outerLoopIndex; innerLoopIndex++) {
            row += '#';
        }
        console.log(row);
    }
    


    /*
    5. Using loop print the following pattern
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
    */
      
 console.log('i    i^2   i^3');

 for (let value= 0; value <= 10; value++) {
    const valueSquare = value ** 2;
    const valueCube = value ** 3;
    console.log(`${value}    ${valueSquare}    ${valueCube}`);
}


// Use for loop to iterate from 0 to 100 and print only even numbers
for (let number = 0 ; number <= 100 ; number++)
{
    if(number%2 == 0)
    {
        console.log(number)
    }
}



// Use for loop to iterate from 0 to 100 and print only odd numbers
for (let number = 0 ; number <= 100 ; number++)
{
    if(number%2 !== 0)
    {
        console.log(number)
    }
}


// Use for loop to iterate from 0 to 100 and print only prime numbers
for (let number = 2; number <= 100; number++) {
    let isPrime = true;

    for (let innerLoopIndex = 2; innerLoopIndex <= Math.sqrt(number); innerLoopIndex++) {
        if (number % innerLoopIndex === 0) {
            isPrime = false;
            break; 
        }
    }

   
    if (isPrime) {
        console.log(number);
    }
}



// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for(let number = 0 ; number<=100 ; number++)
{
    sum += number ;
}

console.log(sum)


// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let evenSum = 0;
let oddSum = 0;
for (let number = 0 ; number <= 100 ; number++)
{
    if(number%2 == 0)
    {
        evenSum += number
    }
    else 
    {
        oddSum += number
    }
}
 console.log(evenSum)
 console.log(oddSum)

 // Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. //O/P:   [2550, 2500]

 let array = [evenSum,oddSum]
 console.log(array)


 // 11. Develop a small script which generate array of 5 random numbers
 const randomNumbersArray = [];
    for (let number = 0; number < 5; number++) {
        randomNumbersArray.push(Math.ceil(Math.random() * 100));
    }
    console.log(randomNumbersArray)


    // 12. Develop a small script which generate array of 5 random numbers and the numbers must be unique
    const uniqueRandomNumbersArray = []
    for (let number = 0; number < 5; number++) {
        if(!uniqueRandomNumbersArray.includes(Math.ceil(Math.random() * 100)))
        {
            uniqueRandomNumbersArray.push(Math.ceil(Math.random() * 100))
        }
       
    }
    console.log(uniqueRandomNumbersArray)

    // 13. Develop a small script which generate a six characters random id: //iuyt56

    // Develop a small script which generate any number of characters random id.


     //Write a script which generates a random hexadecimal number.


     /*
     Using the above countries array, create the following new array.
["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
     */


const newCountriesArray = []
for(let indexOfArray = 0 ; indexOfArray < countries.length ; indexOfArray++)
{
    newCountriesArray.push(countries[indexOfArray].toUpperCase())
}
console.log(newCountriesArray)

/*Using the above countries array, create an array for countries length
[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
*/
const lengthOfCountriesArray = []
for(let indexOfArray = 0 ; indexOfArray < countries.length ; indexOfArray++)
{
    lengthOfCountriesArray.push(countries[indexOfArray].length)
}
console.log(lengthOfCountriesArray)


/*
18. Use the countries array to create the following array of arrays:
  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]

*/

const countriesArrayWithInitialsAndLength = []
for(let indexOfArray = 0 ; indexOfArray < countries.length ; indexOfArray++)
{
    countriesArrayWithInitialsAndLength.push(countries[indexOfArray] , countries[indexOfArray].slice(0,3).toUpperCase(), countries[indexOfArray].length)
}
console.log(countriesArrayWithInitialsAndLength)



/*
19. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
['Finland','Ireland', 'Iceland']
*/

const countriesNameContainingLand = [];
for (let indexOfArray = 0; indexOfArray < countries.length; indexOfArray++) {
    if (countries[indexOfArray].includes('land')) {
        countriesNameContainingLand.push(countries[indexOfArray]);
    }
}
console.log(countriesNameContainingLand);



//  Using the above countries array, find the country containing the biggest number of characters.
let countryWithLongestCharacter = [];

for (let indexOfArray = 0; indexOfArray < countries.length; indexOfArray++) {
    if (countries[indexOfArray].length > countryWithLongestCharacter.length) {
        countryWithLongestCharacter = countries[indexOfArray];
    }
}

console.log(countryWithLongestCharacter);







//  Using the above countries array, find the country containing only 5 characters.
const countriesWithFiveCharacters = []
for(let indexOfArray = 0 ;indexOfArray<countries.length;indexOfArray++)
{
    if(countries[indexOfArray].length === 5)
    {
        countriesWithFiveCharacters.push(countries[indexOfArray])
    }
}

console.log(countriesWithFiveCharacters)
// Find the longest word in the webTechs array.


let techWithLongestWord = [];

for (let indexOfArray = 0; indexOfArray < webTechs.length; indexOfArray++) {
    if (webTechs[indexOfArray].length > techWithLongestWord.length) {
        techWithLongestWord = webTechs[indexOfArray];
    }
}

console.log(techWithLongestWord);

/* Use the webTechs array to create the following array of arrays:
[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
*/

const techArrayWithLength = []
for(let indexOfArray = 0 ; indexOfArray < webTechs.length ; indexOfArray++)
{
    techArrayWithLength.push(webTechs[indexOfArray] ,  webTechs[indexOfArray].length)
}
console.log(techArrayWithLength)



/*
24. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
*/

let mernStackArray = '';
for(indexOfArray=0;indexOfArray<mernStack.length;indexOfArray++)
{
                    mernStackArray += mernStack[indexOfArray][0]
}
console.log(mernStackArray)


// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.


for(let indexOfArray = 0 ; indexOfArray < webTechs.length;indexOfArray++)
{
    console.log(webTechs[indexOfArray])
}


// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

const fruits = ['banana', 'orange', 'mango', 'lemon']

for(indexOfArray = fruits.length-1 ; indexOfArray >= 0 ; indexOfArray--)
{
    console.log(fruits[indexOfArray])
}


/*
Print all the elements of array as shown below.
  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

OUTPUT: 

  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB
*/

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]


  for (let indexOfOuterLoop = 0; indexOfOuterLoop < fullStack.length; indexOfOuterLoop++) {
    for (let indexOfInnerLoop = 0; indexOfInnerLoop < fullStack[indexOfOuterLoop].length; indexOfInnerLoop++) {
      console.log(fullStack[indexOfOuterLoop][indexOfInnerLoop]);
    }
  }