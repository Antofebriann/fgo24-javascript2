const calculate = (num1, num2, cb) => {
    return cb(num1);
};

const checkOddEven = (number) => {
    return number % 2 === 0 ? "Genap" : "Ganjil";
};

console.log(calculate(4, null, checkOddEven));
console.log(calculate(9, null, checkOddEven));
