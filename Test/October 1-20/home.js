var a = 'Hello there!';

console.log(a);

document.getElementById('text').innerHTML = a;

var age = prompt('What is your age?');

console.log(age);

document.getElementById('moreText').innerHTML = age;

var num1 = 10;

num1++;
num2 = num1 * 6;

console.log(num2);

document.getElementById('someNumber').innerHTML = num2;

function greeting(yourName, age) {
    
    var result = yourName;
    console.log(result, age);
    document.getElementById('yourName').innerHTML = result;
    document.getElementById('yourAge').innerHTML= age;
}
    var yourName = prompt('What is your name?');
    var age = prompt('What is your age?');
greeting('Hello' + ' ' + yourName, 'You are' + ' ' + age);

function sumNumbers(num1, num2) { //The name of the function is 'sumNumbers' 
    var result = num1 + num2;
    console.log(result);
    document.getElementById('Results').innerHTML = result
}
// Run the funtion by adding the function name after the function.
sumNumbers(10, 5);