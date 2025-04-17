function pembeda(angka){
    if(typeof angka !== "number"){
        console.log(`parameter time harus bertipe number`)
        return
    }
    if( angka % 2 == 0){
        console.log(`itu adalah bilangan genap ${angka}`)
    }else{
        console.log(`itu adalah bilangan ganjil ${angka}`)
    }
}

pembeda(10)
pembeda(9)