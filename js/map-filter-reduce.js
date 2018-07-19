

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];


/*///// Your code///


console.log(users[1].name);


//Create a file named map-filter-reduce.js in your js directory and copy the data below into it.



//    Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

//let userLanguages = [];


function getUserArray() {
    for (i = 0; i <= users.length-1; i ++) {
        console.log ((i) + (users.name) + ' ' +((users[i].languages)));
  //
    }
};

getUserArray();

//console.log(users[1].languages);



//let userLanguages = users[1].languages;

//console.log(userLanguages);


// let languagesReturned = users.languages.filter(l => l >= 3 );
  //  console.log(languagesReturned);




//    Use .map to create an array of strings where each element is a user's email address

//Use .reduce to transform the array into an object where the object's keys are ids and the values are objects that represent each user
*/



///// Solution /////


//Filter//

//Does not affect original array//

let newUsers = users.filter(user => user.languages.length > 2);

console.log(newUsers);

//----------------------//

let emails = users.map( user => user.email);

console.log(emails);


let obj = {}

let newObject = users.reduce( (accumulation, curObj) => {
   return accumulation['id'] = curObj;



}, {});


console.log(newObject);
