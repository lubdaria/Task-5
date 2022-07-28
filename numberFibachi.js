// let num = 5!;
// let num = 1, 1, 2, 3, 5, 8, 13, - числа фібоначчі
// Вводиш 7, повертає 13
// Два способи: рекурсивний, через цикл.


let number = Number(prompt('Enter the factorial number', 2));
let fibonacciNumbers = findFibonacciNumbers(number);
console.log(fibonacciNumbers);

function findFibonacciNumbers(num){
  let x = 0;
  let y = 1;

  for (let i = 0; i <= num; i++) {
    if(i % 2 == 0){
      y = x + y;
    } 
    else {
      x = x + y;
    }
  }
  
  if(num % 2 == 0){
    return x;
  } 
  else {
    return y;
  }
  
}

// let number = Number(prompt('Enter the factorial number', 2));
// let fibonacciNumbers = findFibonacciNumbers(number);
// console.log(fibonacciNumbers);

// function findFibonacciNumbers(num, x, y){
//   let x = 0;
//   let y = 1;

//   if(num % 2 == 0){
//     return y = y + findFibonacciNumbers(num - 1, x);
//   } 
//   else {
//     return x = x + findFibonacciNumbers(num - 1, y);
//   }
// }
