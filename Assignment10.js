const constants = [2.72, 3.14, 9.81, 37, 100]

// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

// Destructure and assign the elements of countries array to fin, est, sw, den, nor

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

const [fin, est, sw, den, nor] = countries


// Destructure the rectangle object by its properties or keys.

const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
  }

  const { width, height, area, perimeter } = rectangle;


  // Iterate through the users array and get all the keys of the object using destructuring
  const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]

    




    // Find the persons who have less than two skills

 console.log(users.filter(user => user.skills.length < 2));


 //7. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

 const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
 console.log(name, skills, jsScore, reactScore)

 const [name, skills, [jsScore, reactScore]] = student;


 //8. Write a function called convertArrayToObject which can convert the array to a structure object.
    const students = [
        ['David', ['HTML', 'CSS', 'JS', 'Node'], [98, 85, 90, 95]],
        ['John', ['HTML', 'CSS', 'JS', 'Node'], [85, 80, 85, 80]]
      ]

    /*console.log(convertArrayToObject(students))
    [
      {
        name: 'David',
        skills: ['HTML','CSS','JS','Node'],
        scores: [98,85,90,95]
      },
      {
        name: 'John',
        skills: ['HTML','CSS','JS','Node'],
        scores: [85, 80,85,80]
      }
    ]
    */


    // function convertArrayToObject(students) 
    // {
    //   const newStudents = []
    //   for(const student of students)


    // }



function convertArrayToObject(students)
{
    const newStudents=[]
    for(const student of students)
    {
        
        const [name,skills,scores] = student;
        const studentsInfo ={};
        studentsInfo.name =name;
        studentsInfo.skills = skills;
        studentsInfo.scores =scores;
        newStudents.push(studentsInfo);
       

    }
    return newStudents;
}

console.log(convertArrayToObject(students));

    
const newStudent = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}



/*
9. Copy the student object to newStudent without mutating the original object. In the new object add the following ?
Add Bootstrap with level 8 to the front end skill sets
Add Express with level 9 to the back end skill sets
Add SQL with level 8 to the data base skill sets
Add SQL without level to the data science skill sets
*/


/*
 {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        {skill: 'HTML',level: 10},
        {skill: 'CSS',level: 8},
        {skill: 'JS',level: 8},
        {skill: 'React',level: 9},
        {skill: 'BootStrap',level: 8}
      ],
      backEnd: [
        {skill: 'Node',level: 7},
        {skill: 'GraphQL',level: 8},
        {skill: 'Express',level: 9}
      ],
      dataBase: [
        { skill: 'MongoDB',level: 7.5},
        { skill: 'SQL',level: 8}
      ],
      dataScience: ['Python','R','D3.js','SQL']
    }
  }
*/

const newArray = {...newStudent}
newArray.skills.frontEnd.push({skill:'Bootstrap ',level:8});
newArray.skills.backEnd.push({skill:'Express',level:9});
newArray.skills.dataBase.push({skill:'SQL',level:8});
newArray.skills.dataScience.push({skill:'SQL',level:8});

console.log(newArray)
