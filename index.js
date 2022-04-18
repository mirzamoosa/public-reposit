function greet(name)
{
    console.log('Hello' + name );
}
greet('jhon');


var x= num(6,4);
console.log(x)
function num(a,b){
    return (a*b)

}
//Assignment operator
var a = 2;
var b = 8;
var c =(a+b)*2;
document.write(c);
var a = 10;
var b = 12;
a += b;
document.write(a);
var a = 8;
var b = 4;
a -= b;
document.write(a);
var a = 8;
var b = 4;
a *= b;
document.write(a);
var a = 8;
var b = 4;
a /= b;
document.write(a);
var a = 8;
var b = 4;
a **= b;
document.write(a);
var a = 8;
var b = 4;
a <<= b;
document.write(a);
console.table([1,2,3]);


//comparison operator

var a = 10;
var b = 8;
console.log(a == b);

var a = 10;
var b = 8;
console.log(a != b);

var a = 10;
var b = 8;
console.log(a <= b);

var x = 15;
if(x>10){
    document.write("x is greter");
}
var a =10;
var b =5;
if (a>b){

    document.write("a is greater");
}

var age = 22;
if( age >=18 && age <=22){
    document.write("you are eligible");

}


var per = 75;

if(per >= 85 && per <= 100){
    document.write("your cgpa is 4");
}

else if(per >= 75 && per <= 85){
    document.write("your cgpa is 3.66");
}

else if(per >= 65 && per <= 75){
    document.write("your cgpa is 3");
}

else if(per >= 50 && per <= 65){
    document.write("your cgpa is 2.5");
}

else{
    document.write("you are Fail");
}

var x =15;
var z;
(x> 18)? z= "true": z="False";
document.write(z);

var a = 50;
var b;
(a >45)? b="True" : "False";
document.write(b);
  

var day = 6;

switch (day){
    case 0:
          document.write("sunday");
    break;

    case 1:
          document.write("Monday");
    break;

    case 2:
          document.write("Tuesday");
    break;

    case 3:
          document.write("Wednessday");
    break;

    case 4:
          document.write("Thursday");
    break;

    case 5:
          document.write("Friday");
    break;

    case 6:
          document.write("Saturday");
    break;

    default:
        document.write("Enter the valid day");
}
var age = 22;
switch (true){
    case(age <=15 && age >=22):
             document.write("you are eligible");
             break;


     case(age <= 22 && age>=18):
              document.write("you are not eligible");
              break;

              default:
                  document.write("Enter the valid age");
}

var now = new Date();
document.write(now.getMinutes());

var a = 10;
var b = 20;
if(a>b){
    alert("A is greater");

}
else {
    alert("B is greater");
}

confirm("Do you like our website ?");


var a = prompt("what is your name");
alert (a);

function hello(firstname , lastname){
    console.log("hello"+ firstname +"" + lastname);

}
hello("mirza" , "moosa ");
hello("noman" ,"khalid");
for(let i=0; i<50; i++){
    console.log(i);
}
let =0;
while(j<50){
    console.log(j);
    j +=1;
}

let  =0;
do{
    console.log(j);
    if(j===10){
        break;
    }
    j+=1;

}while((j<50));



var a =12;
var x =2;

function logname(b,c){
    return c;
    return a=a-b-c;
    return b;
    return console.log(b);
   
   
}
console.log(logname(x, c=5));
console.log(logname(x, c=6));
var x =3;console.log(a)


var age =20;
if (age<18){
    console.log("qualify for driving");

}
else if(age>18){
    console.log("you are drive");
}
else {
    console.log("not qualify for driving");
}


for (let i=0; i<10; i++){
    console.log(i);
}
let =40;
while( j<45){
    console.log(j);
    j++;

}

let k=15;
do{
    console.log(k);
    k++;
}while(k<25);

var ary= [10,20,30,"inshal","ahad"];
document.write(ary);

let marks = [34,22,26,83];
let fruits = ['apple','mango','pineapple'];
let mixed =['str',98,[3,5]];


console.log(marks);
console.log(fruits[2]);

const arr= new Array(23,45,65,'APPLE');
console.log(arr);



const girls =["Anusha","Aunzila","iqra"];
const boys = ["shahzaib","waleed","noman"];
const children = girls.concat(boys);
document.getElementById("demo").innerHTML = children;

const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo1").innerHTML = points;  

points.sort(function(a, b){return a - b});
document.getElementById("demo2").innerHTML = points;

const numbers =[35,42,65,15];
let txt ="";
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML= txt;
function myFunction(value, index , array) {
    txt += value + "<br>";}


class hell0{
    message(){
        console.log("Hello Everyone");
    }
    sorry(){
        console.log("sorry Everyone");
    }
}
let a = new hell0(); 

a.message();
a.sorry();

class Vehicle{
    constructor(name , maker , engine){
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
}
let b = new Vehicle('Hayabusa','suzuki','1340cc');
console.log(b.name);
console.log(b.maker);



//object create();
const coder = {
    isStudying : false,
    printIntroduction : function(){
        console.log(`My name is ${this.name}. Am i studying?: ${this.isStudying}. `)
    }
}
//object create()method
const me  = Object.create(coder);
me.name = 'Mukul';
me.isStudying = true;
me.printIntroduction();


class person{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }
    add_Address(add){
        this.add =add;
    }
    getDetails(){
        console.log(`Name is ${this.name},Address is:${this.add}`);
    }
}

let person1 = new person('IQra',21);
person1.add_Address('Delhi');
person1.getDetails();