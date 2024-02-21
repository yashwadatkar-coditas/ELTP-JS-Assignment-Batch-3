// Read the countries API using fetch and print the name of country, capital, languages, population and area.

const countriesAPI = "https://restcountries.com/v2/all";

fetch(countriesAPI).then((data) => {

  data.json().then((apidata) => {
    
    apidata.map((country) => {
      const { name, capital, languages, population, area } = country;
       console.log(JSON.stringify({ name, capital, languages, population, area }));
    
      // console.log(name)
      // console.log(capital)
      // console.log(languages)
      // console.log(population)
      // console.log(area)
    });
  }).catch((error)=>{
    console.log(error)
  })
})

// Print out all the cat names in to catNames variable.

 const catsAPI = "https://api.thecatapi.com/v1/breeds";

 fetch(catsAPI).then((catsData)=>{
    catsData.json().then((catsApiData) => {

        catsApiData.map((cats)=>{
            const {name}  = cats
            console.log({name})

        })
    })
 }).catch((error)=>{
  console.log(error)
 })


 // Read the cats api and find the average weight of cat in metric unit.


//  const averageWeight=fetch(catsAPI)
//  .then((catsData) => {
//    catsData.json().then((catsApiData) => {
//        catsApiData.reduce((sumOfWeight,weight) => {
          
//           sumOfWeight += weight
//           return sumOfWeight
          
//        }
    
//        )
       
//    })
   
//  });

//  console.log(averageWeight)



