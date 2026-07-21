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

function login (user) {
    if (user) {
        return `${"User log in"}`        
    }
    return `${user} user log in`
}
console.log(login("Tukeshwar")*/

