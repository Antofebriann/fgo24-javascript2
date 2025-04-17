// const fungsiUtama = (val, cb)=>{
//     cb(val)
// }

// const fungsiKedua = (str)=>{
//     console.log(str)
// }
// const fungsiKedua = (str)=>{
//     console.log(`${str} ed`)
// }
// fungsiKedua("haloo")

const calculate = (num1, num2, cb)=>{
    return cb(num1, num2)
}

const multiply = (x1, x2)=>{
    return x1 * x2
}
const divide = (y1, y2)=>{
    return y1 / y2
}

const result1 = calculate(5,2, multiply)
const result2 = calculate(5,2, divide)
const result3 = calculate(5,2, function(a1,a2){
    return a1+a2
})

console.log(result1)   
console.log(result2)
console.log(result3)