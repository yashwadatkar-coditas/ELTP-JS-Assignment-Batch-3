// filter function 


const numbersArray = [1,2,3,4,5,6,7,8]

const checkEvenFunction = (number) => number%2 == 0

const customFilterFunction = (array , checkEven) =>
{

    const evenArray = [];
    for(const element of array)
    {
        if(checkEven(element))
        {
            evenArray.push(element);
        }
    }
    return evenArray;
}


console.log(customFilterFunction(numbersArray,checkEvenFunction))



// map function 

const squaringTheNumber = (number) => number**2


const customMap = (array,squareNumber) => 
{
    const squareNumberArray = []
    for(const element of array){
    squareNumberArray.push(squareNumber(element))
    }

    return squareNumberArray;
}

console.log(customMap(numbersArray,squaringTheNumber))



//  reduce


const customReduce = (array , addValues , initialValues = 0 ) =>
{

    let accumaulator = initialValues;
    for(const element of array)
    {
        accumaulator = addValues(accumaulator,element)
        

    
    }
    return accumaulator
}

 console.log( customReduce( [1,2,3,4,5] , (accumaulator,value)=>{ return accumaulator*value }  , 1 ) ) ;
