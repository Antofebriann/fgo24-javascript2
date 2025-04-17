// function calculate(){
//     console.log("halo")
//     console.log(10*10)
// }
// console.log(calculate())

function greetings(name,time){
    if(typeof time !== "number"){
        console.log(`parameter time harus bertipe number`)
        return
    }
    console.log(`halo ${name} sekarang pukul ${time}`)
    if(time > 10){
        console.log(`halo selamat pagi ${name},  selamat beraktivitas`)
    }else{
        console.log(`halo selamat siang ${name} selamat beraktivitas`)
    }
}

greetings("John", 10)
greetings("nod", 9)
greetings("kio", 13)