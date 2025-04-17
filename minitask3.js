const celcius = {
    kelvin: function(c){
        return c + 273
    },
    fahrenheit: function(c){
        return (9/5 *c) + 32
    },
    reamur: function(c){
        return 4/5 * c
    },
    convert: function   (c, type){
        if(typeof c !== "number"){
            console.log("suhu harus sebuah number")
            return
        }
        let result = null
        // if(type === "f"){
        //     console.log(`c to F ${this.fahrenheit(c)}`)
        switch(type){
            case "f":
                result = this.fahrenheit(c)
                break;
            case "k":
                result = this.kelvin(c)
                break;
            case "r": 
            result = this.reamur(c)
            break;
        }
        return result
        // console.log(result)
    }
    
    }

const fahrenheit = celcius.convert(20, "f")
const kelvin = celcius.convert(20, "k")
const reamur = celcius.convert(20, "r")

console.log("hasil konversi:" + fahrenheit)
console.log("hasil konversi:" + kelvin)
console.log("hasil konversi:" + reamur)