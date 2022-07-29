// let num = 5!;
// let num = 1, 1, 2, 3, 5, 8, 13, - числа фібоначчі
// Вводиш 7, повертає 13
// Два способи: рекурсивний, через цикл.


let number = Number(prompt('Enter the factorial number', 2));
let fibonacciNumbers = findFibonacciNumbers(number);
console.log(fibonacciNumbers);

function findFibonacciNumbers(num){

  if(num === 0){
    return 0;
  } 

  let x = 0; 
  let y = 1; 

  for (let i = 1; i < num; i++) {
    let j = x + y;
    x = y;
    y = j;
  }
  return y;
}



// Рекурсія

let factorialNumber = Number(prompt('Enter the factorial number', 2));
let fibonacciNumber = showFibonacciNumbers(factorialNumber);
console.log(fibonacciNumber);

function showFibonacciNumbers(num){
  let x = 0;
  let y = 1;

  if(num === 0){
    return x;
  } 
  else if(num === 1){
    return y;
  } 
  else {
    return showFibonacciNumbers(num - 1) + showFibonacciNumbers(num - 2);
  }
}

