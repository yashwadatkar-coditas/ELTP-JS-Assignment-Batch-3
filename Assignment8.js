
// Declare an empty array;
const emptyArray = []

// Declare an array with more than 5 number of elements

const array = [1,2,3,4,5,'six']

// Find the length of your array

console.log(array.length)

// Get the first item, the middle item and the last item of the array

console.log(array[0],array[3],array[5])

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = [1,'two',3,4.5,'five',[5]]
console.log(mixedDataTypes.length)

//Declare an array variable name itCompanies and assign initial values Coditas, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Coditas','Google','Microsoft','Apple','IBM','Oracle','Amazon']

//Print the array using console.log()
console.log(itCompanies)

//Print the number of companies in the array
console.log(itCompanies.length)

// Print the first company, middle and last company
console.log(`first company is ${itCompanies[0]}`)
console.log(`last company is ${itCompanies[itCompanies.length-1]}`)
console.log(`first company is ${itCompanies[3]}`)


// Print out each company
for(let indexOfArray = 0 ; indexOfArray < itCompanies.length; indexOfArray++)
{
    console.log(itCompanies[indexOfArray]);
}

// Change each company name to uppercase one by one and print them out
for(let indexOfArray = 0 ; indexOfArray < itCompanies.length; indexOfArray++)
{
    const newItCompaniesAray = itCompanies[indexOfArray].toUpperCase()
    console.log(newItCompaniesAray[indexOfArray]);
}

// Print the array like as a sentence: Coditas, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.toString(' ') + ' are big it companies')

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const nameOfItCompanies = 'Amazon'
itCompanies.includes(nameOfItCompanies) ? console.log(nameOfItCompanies) : console.log('company is not found')





// Filter out companies which have more than one 'o' without the filter method

let filterCompanies = [];
for (let indexOfArray = 0; indexOfArray < itCompanies.length; indexOfArray++) {
  let wordCount = 0;
  for (let character = 0; character < itCompanies[indexOfArray].length; character++) {
    if (itCompanies[indexOfArray][character].toLowerCase() === "o") {
      wordCount++;
    }
  }
  if (wordCount > 1) {
    filterCompanies.push(itCompanies[indexOfArray]);
  }
}
console.log( filterCompanies);


// Sort the array using sort() method
console.log(itCompanies.sort())

// Sort the array by country name length without sort;
console.log()

// Reverse the array using reverse() method
console.log(itCompanies.reverse())

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(3,7))

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(4,7))

// Slice out the middle IT company or companies from the array


console.log(itCompanies.slice(1, itCompanies.length - 2))


// Remove the first IT company from the array
console.log(itCompanies.shift())
console.log(itCompanies)

// Remove the middle IT company or companies from the array

// Remove the last IT company from the array
console.log(itCompanies.pop())
console.log(itCompanies)

// Remove all IT companies
while(itCompanies.length > 0) {
    itCompanies.pop();
}
console.log(itCompanies)

/*24. First remove all the punctuations and change the string to array and count the number of words in the array, dont use regex
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, Node, Python, dJango' */


let textData =
  "I love teaching and empowering people. I teach HTML, CSS, JS, Node, Python, dJango";
text = textData.replaceAll(",", "");
text = textData.replaceAll(".", "");
text = textData.split(" ");
console.log(
  "Removing all the punctuations and changing the string",
  textData.length
);

/*
25. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
add 'Rasmalai' in the beginning of your shopping cart if it has not been already added
add Gulabjamun at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'
*/

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Rasmalai' in the beginning of your shopping cart if it has not been already added
shoppingCart.includes('Rasmalai' ) ? console.log('already exist') : shoppingCart.unshift('Rasmalai')
//add Gulabjamun at the end of you shopping cart if it has not been already added
shoppingCart.includes('Gulabjamun' ) ? console.log('already exist') : shoppingCart.push('Gulabjamun')
console.log(shoppingCart)

// remove 'Honey' if you are allergic to honey
const allergicToHoney = true

// modify Tea to 'Green Tea'
shoppingCart[3] = 'Green Tea'
console.log(shoppingCart)



const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'India',
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

  // 26. In countries array check if 'India' exists in the array if it exists print 'INDIA'. If it does not exist add to the countries list.

  countries.includes('India') ? console.log('INDIA') : countries.push('India')

  // in the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

  webTechs.includes('Sass') ? console.log('Sass is a CSS preprocess') : countries.push('Sass')


/*Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

console.log(fullStack) */ 

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)


/*
The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
*/



// Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages[0])
console.log(ages[ages.length-1])

// Find the median age(one middle item or two middle items divided by two)
const medianIndex = Math.abs(ages.length / 2)
console.log(ages[medianIndex])




// Find the average age(all items divided by number of items)

let sumOfAges = 0 ;
for(let indexOfArray = 0 ; indexOfArray < ages.length; indexOfArray++)
{
    sumOfAges += ages[indexOfArray]
}

const averageAge = sumOfAges / ages.length
console.log(Math.abs(averageAge))


// Find the range of the ages(max minus min)

console.log(ages[ages.length-1]-ages[0])

// Compare the value of (min - average) and (max - average), use abs() method 

console.log(Math.abs(ages[0] - averageAge))
console.log(Math.abs(ages[ages.length-1] - averageAge))



//1.Slice the first ten countries from the countries array

console.log(countries.slice(0,10))

// Find the middle countries in the countries array.

console.log(countries[(countries.length-1)/2])

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half


let firstHalfOfCountries;
let secondHalfOfCountries;
if (!(countries.length % 2 === 0)) {
  firstHalfOfCountries = countries.slice(0, Math.floor(countries.length / 2));
  secondHalfOfCountries = countries.slice(Math.floor(countries.length / 2));
} else {
  firstHalfOfCountries = countries.slice(0, Math.floor(countries.length / 2) + 1);
  secondHalfOfCountries = countries.slice(Math.floor(countries.length / 2) + 1);
}
console.log(firstHalfOfCountries);
console.log(secondHalfOfCountries);



