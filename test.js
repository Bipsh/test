console.log('hello world');
const oneNum = 2;
console.log(2+2);
function add(a,b){
    return a+b;
}
console.log(add(oneNum, oneNum)); 
function exponent(a,b,c){
    return (a+b)**c;
}
let exponentResult = exponent(oneNum, oneNum, oneNum);
console.log(`${exponentResult} Число ${exponentResult % 2 === 0 ? 'четное' : 'нечетное'}`);

let array = [];
for (let i=0; i<6; i++){
    const number1 = Math.floor(Math.random() * 300);
    const number2 = Math.floor(Math.random() * 300);
    const result = exponent(number1, number2, i);
    console.log(`Сумма ${number1} и ${number2} в степени ${i} равна ${result}`);
       
}