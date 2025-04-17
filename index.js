// const arr1 = ["halo"]
// const arr2 = ["selamat pagi"]

// const arr3 = [...arr1,...arr2]
// console.log [arr3]

const bio = {
    fullname: "John",
    age: 29,

}

const extraInfo = {
    skills: ["web, paint, hiking"],
    education: [
      {  name: "smpn 1 wsb",
        year: 2011
      }
    ]
}

const profile = {
    ...bio,
    ...extraInfo
}

console.log(profile)