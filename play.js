/* const name = "Carlson";
let age = 27;
const hasHobbies = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        "Name is " + 
        userName + 
        ", age is " + 
        userAge + 
        " and the user has hobbies: " + 
        userHasHobby
    );
}

// const add = (a, b) => a + b;
// const addOne = a => a + 1;
const addRandom = () => 1 + 2;

//console.log(add(5, 3));
//console.log(addOne(1));
console.log(addRandom());

console.log(summarizeUser(name, age, hasHobbies)); */

const person = {
    name: "John",
    age: 30,
    green() {
        console.log("Hi!, I am " + this.name);
    }
};

const printName = ({ name }) => {
    console.log(name);
};

printName(person);

const { name, age} = person;
console.log(name, age);


//const copiedPerson = {...person};
//console.log(copiedPerson);

//const hobbies = ["Sports", "Cooking"];
//const [hobby1, hobby2] = hobbies;
//console.log(hobby1, hobby2);
/*for (let hobby of hobbies) {
//    console.log(hobby);
//}
console.log(hobbies.map(hobby => {
    return "hobby: " + hobby;
}));

//console.log(hobbies.map(hobby => "hobby: " + hobby));
//console.log(hobbies); 
const copiedArray = [...hobbies];
 console.log(copiedArray); 

 const toArray = (...args) => {
    return args;
 };

 console.log(toArray(1, 2, 3, 4)); */

 const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("Done!"); 
    }, 5000);
    });
    return promise;
 };

 setTimeout(() => {
     console.log("I will run after 1 second");
     fetchData()
     .then(text => {
        console.log(text);
        return fetchData();
     })
     .then(text2 => {
        console.log(text2);
        return fetchData();
     });
 }, 3000);

 console.log("HI!");
 console.log("Hello!");