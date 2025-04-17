const convertcelcius = (celcius, type, cb) => {
    return cb(celcius, type);
};

const convert = (c, t) => {
    let result;

    if (t === "K") {
        result = c + 273;
    } else if (t === "F") {
        result = (9 / 5) * c + 32;
    } else if (t === "R") {
        result = (4 / 5) * c;
    } else {
        return "Tipe suhu tidak dikenali";
    }

    return `Hasil konversi suhu adalah: ${result}`;
};

console.log(convertcelcius(25, "K", convert));
console.log(convertcelcius(25, "F", convert)); 
console.log(convertcelcius(25, "R", convert)); 
console.log(convertcelcius(25, "X", convert)); 
