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
