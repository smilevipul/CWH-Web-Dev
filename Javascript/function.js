// console.log("Hello Vipul");

let name = "Vipul";
let name1 = "Rahul";
let name2 = "Ahishek";
let name3 = "Shivam";
let GreetText = "Good Morning";

// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");

function greet(name,GreetText = "Grreting from Javascript")
{
    console.log(name + " is a good boy");
    console.log(GreetText+" " + name);
}

greet(name);
greet(name1,GreetText);
greet(name2,GreetText);
greet(name3,GreetText);

function sum(a,b,c)
{
    return a+b+c;
}

function max(a,b)
{
    if(a>b)
    return a;
    else
    return b;
}

let returnval = sum(1,2,3);
console.log(returnval);

let rtrVal = max(7,5);
console.log(rtrVal);