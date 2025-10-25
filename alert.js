// function calculateArea(){
// let a = parseFloat(document.getElementById('base'));
// let b = parseFloat(document.getElementById('base1'));
// let h = parseFloat(document.getElementById('height'));
// const result = document.getElementById("result");
// let a = prompt("Enter base");
// let b = prompt("Enter other base");
// let h = prompt("enter height");

let base1 = 10;
let base2 = 12;
let height = 2;
const area = 0.5 / (base1 + base2) * height;
console.log('Trapezoid Area Calculation')
console.log('Base1: ', base1);
console.log('Base2: ', base2);
console.log('Height: ', height)
console.log(area.toFixed(2));

document.getElementById('base1').textContent = "Base1 : " + base1;
document.getElementById('base2').textContent = "Base2 : " + base2;
document.getElementById('height').textContent = "Height : " + height;
document.getElementById('area').textContent = "Area : " + "0.5 / (base1 + base2) * height";
document.getElementById('result').textContent = "The area of a Trapezoid is: " + area.toFixed(2) + "cm square";


let u = 25;
let tet = 48;
const radian = tet * (Math.PI / 180);
const g = 9.81;

const t = (2 * u  * Math.sin(radian)) /g;
console.log('Time Of Flight Calculation')
console.log('Initial Velocity: ', u);
console.log('Launch Angle: ', tet);
console.log('Acceleration due to gravity: ', g);
console.log(t.toFixed(2), "m/s");


document.getElementById('u').textContent = "Initial Velocity : " + u + "m/s";
document.getElementById('v').textContent = "Launch Angle: " + tet + "degrees";
document.getElementById('a').textContent = "Acceleration : " + g + "m/s";
document.getElementById('t').textContent = "Time Of Flight : " + "2usin(0)/g";
document.getElementById('results').textContent = "The time of flight: " + t.toFixed(2) + "s";


let base = 10;
let heigh = 12;
ares = base * heigh;
console.log('Parallelogram Area Calculation')
console.log('base: ', base);
console.log('heiht: ', heigh)
console.log(ares.toFixed(2));

document.getElementById('base').textContent = "Base: " + base;
document.getElementById('heiht').textContent = "Height : " + heigh;
document.getElementById('ares').textContent = "Area : " + "base * height";
document.getElementById('answer').textContent = "The area of a Parallelogram is: " + area.toFixed(2) + "cm square";
