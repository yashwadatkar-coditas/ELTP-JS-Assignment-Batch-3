// 1. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

console.log(typeof '10') // checking if '10' is exactly equal to 10

parseInt('10') === 10 ? console.log(true) : console.log(false)


// 2 .Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

Math.ceil(parseFloat('9.8') )=== 10 ? console.log(true) : console.log(false)

//3 .Generate a random number between 0 and 100 inclusively.

console.log(Math.round(Math.random()*100))

 // 4 .Generate a random number between 50 and 100 inclusively.
 console.log(Math.round(Math.random()*51)+50)

 /*5. Use console.log() and escape characters to print the following pattern.
 1 1 1 1 1
 2 1 2 4 8
 3 1 3 9 27
 4 1 4 16 64
 5 1 5 25 125
 */


 
    for(let index =1;index<=5; index++)
    {
        console.log(index + '\t' + index**0 + '\t' + index**1 + '\t' + index**2 + '\t' + index**3 )
    }
 
 
 


 //6. Enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

 const heightOfTriangle = 5 
 const baseOfTriangle = 7

function areaOfTriangle (heightOfTriangle , baseOfTriangle)
{
    console.log(0.5*heightOfTriangle * baseOfTriangle)
}

areaOfTriangle(heightOfTriangle,baseOfTriangle)
 
