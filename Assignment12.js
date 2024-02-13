// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle (length , width )
{
    return length * width;
}

console.log(areaOfRectangle(2,3))

//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

const checkSeason = (month) => {
    const monthInLowerCase = month.toLowerCase();
    
    if (monthInLowerCase === 'december' || monthInLowerCase === 'january' || monthInLowerCase === 'february') {
        console.log('Its winter');
    } else if (monthInLowerCase === 'march' || monthInLowerCase === 'april' || monthInLowerCase === 'may') {
        console.log('Its spring');
    } else if (monthInLowerCase === 'june' || monthInLowerCase === 'july' || monthInLowerCase === 'august') {
        console.log('Its summer');
    } else if (monthInLowerCase === 'september' || monthInLowerCase === 'october' || monthInLowerCase === 'november') {
        console.log('Its autumn');
    } else {
        console.log('Invalid month');
    }
}

checkSeason('march');


/*
Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0
*/

const findMax = (inputNumberOne, inputNumberTwo, inputNumberThree) => {
    let max = inputNumberOne; 

  
    if (inputNumberTwo > max) {
        max = inputNumberTwo;
    }

   
    if (inputNumberThree > max) {
        max = inputNumberThree;
    }

    return max;
}


console.log(findMax(10, 5, 7)); 


// Declare a function name swapValues. This function swaps value of x to y.

const swapValues = (x, y) => {
    let temp = x; 

    x = y; 
    y = temp; 
    return [x, y]; 
}

console.log(swapValues(5, 10)); 


/*
. Write a function generateColors which can generate any number of hexa or rgb colors.
console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
*/




/*
6. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
//['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
*/


const modifyArray = (array) => {
    if (array.length < 5) {
        return 'item not found';
    } else {
        array[4] = array[4].toUpperCase();
        return array;
    }
};


// 7. Write a functions which checks if all items are unique in the array.

const areAllItemsUnique = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return false; 
            }
        }
    }
    return true; 
};


/*
8. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
sevenRandomNumbers()
[(1, 4, 5, 7, 9, 8, 0)]
*/

const sevenRandomNumbers = () => 
{
    for(let index = 0;index < 7;index++){
        let number = Math.ceil(Math.random()*10);
        while(!numbers.includes(number)){
            numbers.push(number);
        }
    }

    return numbers;

}