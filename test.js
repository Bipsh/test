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
let n = result
const isPowerOfTwo = n => {
    if (n > 0 && (n & (n - 1)) === 0) {
        let power = 0;
        let value = 1;
        while (value < n) {
            value *= 2;
            power++;
        }
        return `Число ${n} является степенью 2: 2^${power}`;
    }
    return `Число ${n} не является степенью 2.`;
};
console.log(isPowerOfTwo(n));
}