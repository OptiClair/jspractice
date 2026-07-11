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

const user = {
    fullName: "Rahul joshaf khan",
    age: 115,

    welcome: function () {
        console.log(`Welcome To OptiClair , ${this.fullName}`);
    }
}

user.welcome();
user.fullName = "Tukeshwar";
user.welcome();

const founder = {
    name : 'Tukeshwar Sahu',
    age : '31 years',
    mobileNumber : 8817415179,
}
console.log(founder);


