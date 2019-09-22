// Answer 1
var obj = {
    a: "abc",
    b: 12
}
var source = {
    a: "abc",
    b: 12
}
const matches = (obj, source) =>
Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
console.log(matches(obj,source));

// Answer 2 class implementation 
class rectangle {
    constructor (name, height, width)
    {
        this.name = name;
        this.height = height;
        this.width = width;
    }
    getName(){
        console.log("this is ", this.name);
    }
}
class square extends rectangle 
{
    constructor(side)
    {
        super("square",side,side);
    }
    getName(){
        console.log("this is ", this.name);
    }
    get area(){
        return this.width*this.height;
    }
}
const s = new square(4);
s.getName();
console.log("area is ",s.area);


// Ans 3 Destructuring Assignment - The destructuring assignment syntax allows  to easily get values out of arrays and objects while using an array or object literal like syntax. This syntax is very short and very easy to read. 
var arr = [1,2,3,4,5,6];
var [a,...b] = arr;
console.log(a,b);
var [b,a] = [a,b];
console.log(a,b);

//Answer 4 
//Template literals-a way to deal with strings and specially dynamic strings. 
//It uses a backticks to write string within it , so you can write single and double quotes as much as you need without thinking to alternate between them
//It can solve yhe problem of multi line templates so no need to use \n or \t with backticks 
//variables and expressions you want to concatenate to your string instead of using + to concatenate , you will use ${variable or expression} to define a variable or expression within curly braces 
const firstName = "Vipan";
const lastName = "Singla";
console.log(`my first name is "${firstName}"
and my last name is " ${lastName}"`);

// Answer 5 concatenate two arrays using fat arrow , map and iterators 
var arr1= [1,2,3,4,5];
var arr2= [6,7,8,9];
arr2.map( value => {
    arr1.push(value);
})
console.log(arr1);

// Answer 6 testing a valid Email Address
var input = require('readline-sync');
var email = input.question("enter the email");
var reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var test = reg.exec(email);
console.log(test);
var test1 = reg.test(email);
console.log(test1);