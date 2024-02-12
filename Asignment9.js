// Create an empty object called cow

const cow = {}

// Print the the cow object on the console

console.log(cow)

// Add name, legs, color, age and sound properties for the cow object. The sound property is a method which return "maaah maaah"

cow.name = 'shraddha kapoor';
cow.age = 22;
cow.legs = 4;
cow.color = 'white';
 cow.sound = function (){return 'maaah maaah'};

// Get name, legs, color, age and sound value from the cow object

console.log(cow.name)
console.log(cow.legs)
console.log(cow.color)
console.log(cow.age)
console.log(cow.sound())


// Set new properties the cow object: breed, getCowInfo()

cow['breed'] = 'hybreed';
cow['getCowInfo'] = function () {}


const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }


  // Find the person who has many skills in the users object.

  
  let maximumNumberOfSkills = 0;
  let personWithMostNumberOfSkills = 0;
  for(const key in users)
  {
   
    //console.log(users[key].skills)
    if (users[key].skills.length > maximumNumberOfSkills) {
        maximumNumberOfSkills = users[key].skills.length;
      personWithMostNumberOfSkills = key
        
      }
  }

  console.log(`the person with most number of skills is ${personWithMostNumberOfSkills}`)



// Count logged in users, count users having greater than equal to 30 points from the following object.

let counterForLogedInUsers = 0;
let counterForUsersHavingPointsEqualOrGreaterThanThirty = 0;
  
for(const key in users)
{
    if(users[key].isLoggedIn === true)
    {
        counterForLogedInUsers ++ ;
    }

    if(users[key].points >= 30)
    {
        counterForUsersHavingPointsEqualOrGreaterThanThirty++;
    }
}

console.log(`the number of logged in users are : ${counterForLogedInUsers}`);
console.log(`number of users having points greater or equal to thirt are : ${counterForUsersHavingPointsEqualOrGreaterThanThirty}`)

// Find people who are MERN stack developer from the users object

for(const key in users)
{
    if(users[key].skills.includes('MongoDB') && users[key].skills.includes('Express') && users[key].skills.includes('React') && users[key].skills.includes('Node'))
    {
        console.log(key)
    }
}

 //Set your name in the users object without modifying the original users object


 // Get all keys or properties of users object
 console.log(Object.keys(users))

 // Get all the values of users object
 console.log(Object.values(users))


 const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

 // Use the countries object to print a country name, capital, populations and languages.


 // Create an object called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

 const personAccount = {
    firstName: 'yash',
    lastName: 'wadatkar',
    incomes : 10000,
    expenses :  11000,


 }

 const newusers = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]


/*
Imagine you are getting the below users array of objects.
Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
Create a function called signIn which allows user to sign in to the application
*/

function signUp(newUser) {

    const existingUser = newusers.find(function newusers (){newusers.email === newUser.email});
    if (existingUser) {
        console.log('User already has an account.');
        return;
    }
    
    newusers.push(newUser);
    console.log('User signed up successfully.');
}


signUp({
    _id: 'abc',
    username: 'yash',
    email: 'yash@coditas.com',
    password: 'yash123',
    createdAt: '12/2/2024 10:30 PM',
    isLoggedIn: false
});

 console.log(newusers)

/*
The products array has three elements and each of them has six properties.
Create a function called rateProduct which rates the product
Create a function called averageRating which calculate the average rating of a product
*/


const productRating = function(productId, userId, rating){
  const product = products.find((product) => {
    return product._id === productId;
  });

  if(product){
    const {ratings} = product;
    ratings.push({userId, rating});
  }
}

productRating('abcd', 'yash123', 100);

 console.log(products);


function  productAerageRating (productId) 
{
  const product = products.find((product) => {
    return product._id === productId;
  });

  if(product){
    let totalOfRating = 0;
    const {ratings} = product;
    for(const rating of ratings){
      const{rate} = rating;
      totalOfRating += rate;        
    }
     return sumOfRating / ratings.length;
  } 
}

 console.log(productAerageRating('fg12cy'));

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

function toggleLikeProduct(productId , userId)
{
 
  for( let key in products ){

    let {_id , likes} = products[key];

    if( _id === productId ){
      
      if( likes.includes(userId) ){
        
        const indexOfDeletedItem = likes.indexOf(userId);
        likes.splice( indexOfDeletedItem , 1);
        
      }else{
        
        likes.push(userId);
        
      }
      

    }

  }

}


toggleLikeProduct('eedfcf','fg12cy');
console.log(products)
toggleLikeProduct('eedfcf','fg12cy');
console.log(products)