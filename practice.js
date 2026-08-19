/*let number = "180"

let numberOfb = Boolean(number)
console.log(numberOfb);*/

/*const arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArry = arry.map(arry => arry * 2);

console.log(newArry);*/

/*const names = ["rahul", "Vikash", "Golu"];
const upperNames = names.map(name => name.toUpperCase());

console.log(upperNames);*/

/*const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.map(numbers => numbers + 10);

console.log(evenNumbers);*/


/*const name = [
    {Name : "Rahul", Age : 25},
    {Name : "Vikash", Age : 35},
];

const nameFull = name.filter(name => name.Age > 33);

console.log(nameFull);*/

/*const newArry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(newArry.splice(5));*/

// const arrey = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(arrey.splice(5));

/*const Company = {
    name: "Tukeshwar Sahu",
    age: "31 Years Old",
    gender: "Male",

    print: function() {
        console.log(`Hello ${this.name} , Your Age is ${this.age}, and Your a ${this.gender}`); 
        console.log(this);
        
    }
    
    
};

Company.print()
Company.name = "Neeraj"
Company.print()*/


//All Functions Practice

/*
// 1 Function Expression

const fullName = function () {
    console.log("welcome");
    
}
fullName();

//2 Function Expression with Parameters

const number = function (num1 , num2) {
    return num1 + num2
}
console.log(number(10,2));

//3 Arrow Function

const arr = (fastName, lastName) => {
    return fastName + lastName;
}
console.log(arr(80,20));

// 4 Object Method

const user = {
    name : "Tukeshwar",
    age: "31",

    print: function (){
        console.log(`hellow ${this.name}, and your age ${this.age}`);        
    }
}
user.print();

// 5 Arrow Function (Implicit Return)

const name = (obj1 , obj2) => (obj1 + obj2)
console.log(name(10, 2)); */

/*const object = {
    obj: {
        user: {
            fullname: "Tukeshwar sahu",
        }

    }
};
console.log(object.obj.user.fullname);*/


/*const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}
// const obj3 = {obj1, obj2}

const obj3 = {...obj1, ...obj2}
console.log(obj.name, obj.age, obj2.name, obj2.age);
console.log(obj3);*/

/*const user = [
    {
        id : 1,
        email : "h@gmail.com",
    },     {
        id : 2,
        email : "a@gmail.com",
    },
     {
        id : 3,
        email : "b@gmail.com",
    },
]

// console.log(Object.keys(user));
//console.log(Object.assign(user));
 console.log(Object.values(user));
//console.log(Object.freeze(user));
console.log(Object.entries(user));*/

/*const course = {
    name : "Tukeshwar sahu",
    emailId : "oc@gmail.com",
}

console.log(course.emailId)*/

/*unction greet() {
    console.log('hellow World');
}
greet();

const greets = function () {
    console.log("ok");
    
}
greets();

let greeting = () => {
    console.log("yes");
    
}
greeting();

const add = function (num1, num2) {
    let sum = num1 + num2;
    return sum;
}
console.log(add(5, 6));*/

// arrow

/*const add = ( num1, num2) => num1 + num2;
console.log(add(5, 6));

let adding = function(number1, number2) {
    let sum = number1 + number2;
    return sum;
}
console.log(adding(5, 8));

function ad(a, b) {
    console.log(a + b);
}
ad(5, 5);*/

/*function add(num1, num2) {
    let result = num1 + num2
    return result
    
}
const print = add(5,5);
// console.log(print);

functin login (user) {
    if (user) {
        return `${"User log in"}`        
    }
    return `${user} user log in`
}
console.log(login("Tukeshwar")*/

// arrey,object or Srting Spread

/*const object = {
    name : "Rahul",
    age : 31,
}

const object1 = {
    name : "Vikash",
    age : 25,
}

const objec2 = {
    object,
    object1,
}

console.log(objec2);*/

/*const result = 80;
const marks = 55;

if (marks >= 70) {
    console.log("Grade A");
} else if (marks >= 65) {
    console.log("Grade B");
} else if (marks >= 55 ){
    console.log("Grade C");
} else if (marks >= 30 ) {
    console.log("fail");    
} else {
    console.log("Back To Class");
}*/

// let mobileNumber = ("9981463336");

// if (mobileNumber.length === 10) {
//     console.log("Loged In");    
// } else {
//     console.log("Try Gain");    
// }

/*const marks = 20;

if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else if (marks >= 30) {
    console.log("fail");
} else {
    console.log("Back To Class");
}*/

/*const result = 99;

if (result >= 80) {
    console.log("Grade A");    
} else if (result >= 70) {
    console.log("Grade B");    
} else if (result >= 60) {
    console.log("Grade C");    
} else {
    console.log("fail");    
}*/

/*const mobileNumber = "1234567890";

if (mobileNumber.length === 10) {
    console.log("Loged In");    
} else {
    console.log("Enter The Right Number");    
}*/

/*const opt = () => {
  console.log("Again welcome to OC");
};

const greet = () => {
  console.log("Welcome To OptiClair");
};

opt(); // Welcome To OptiClair
greet();   // Again welcome to OC*/

/*const fullName = "Vaibhav Sahu"

if (fullName === "Tukeshwar Sahu") {
    console.log("Loged In");
} else if (fullName === "Vaibhav Sahu") {
    console.log("Loged In");    
} else {
    console.log("try Again");    
}

const object = {
    name: "Rahul",
    age: 31,

    welcome() {
        console.log(`${this.name}, Welcome to OptiClair`);
    }
};

object.welcome();*/

/*let val1 = 10;
let val2 =2;

function addnum (num1, num2) {
    let total =  num1 + num2;
    return total;
}
let result = addnum(val1, val2);
let result1 = addnum(20, 30);
console.log(result);
console.log(result1);*/

/*const month = 12;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("Nuvember");
        break;
    case 12:
        console.log("December");
        break;
}*/

// turnary operator

// const marks = 80;

// marks >= 80 ? console.log("Grade A") : marks >= 70 ? console.log("Grade B") : marks >= 60 ? console.log("Grade C") : console.log("Fail");

// loop

/*const obj = {
    name: "Rahul",
    age: 31,
    gender: "Male",

    print() {
        console.log(`Hello ${this.name}, Your Age is ${this.age}, and Your a ${this.gender}`);
    }
};

obj.print();*/

// const map = new Map();
// map.set("name", "Rahul");
// map.set("age", 31);
// map.set("gender", "Male");

// // console.log(map.get("name"));
// // console.log(map.get("age"));
// // console.log(map.get("gender"));
// console.log(map.get("name"), map.get("age"), map.get("gender"));

// const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const odd = mynum.filter((num) => num % 2 !== 0);
// const newnum = mynum.filter((num) => num % 2 === 0);

// console.log(newnum);
// console.log(odd);

// const book = [
//     {tital: "The Great Gatsby", author: "T. Sahu", year: 1925},
//     {tital: "To Kill a Mockingbird", author: "Harper Lee", year: 1960},
//     {tital: "1984", author: "George Orwell", year: 1949},
//     {tital: "Pride and Prejudice", author: "T. Sahu", year: 1813},
//     {tital: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951},
//     {tital: "The Hobbit", author: "J.R.R. Tolkien", year: 1937},
// ]

// const bookTital = book.filter((book) => book.year == "1937", );
// console.log(bookTital);

// Map Practice

// const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newnum = mynum.map((num) => num * 2);
// console.log(newnum);

// const names = ["Rahul", "Vikash", "Golu"];
// const upperNames = names.map((name) => name.toUpperCase());
// console.log(upperNames);

// const name = ["rahul", "vikash", "golu"]

// const nameFull = name.map((name) => "Mr. " + name);

// console.log(nameFull);

// filter Practice

// const names = [
//     {Name: "Rahul", Age: 25},
//     {Name: "Vikash", Age: 35},
//     {Name: "Golu", Age: 30},
// ]

// const nameFulls = names.filter((name) => name.Age > 30);
// console.log(nameFulls);

function user(name) {
this.name = name;
}
const user1 = new user ("Tukeshwar Sahu")

user.prototype.sayHello = function () {
    console.log(this.name);
}
user1.sayHello();
