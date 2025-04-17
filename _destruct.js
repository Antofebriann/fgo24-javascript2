// const colors = ["#000", "#fff", "#f00"]

// // const black = colors[0]
// // const white = colors[1]
// // const red = colors[2]

// const [black, white, red] = colors

// console.log(black)
// console.log(white)
// console.log(red)

// console.log(`HEX color dari hitam adalah ${black}`)

// const profile = {
//     name: "Jhon",
//     age: 23,
//     skills: ["web", "paint"],
//     education: {
//         name: "univ i",
//         year: 2022
//     }
// }
// const {skills, age, name: fullName} = profile
// // cost {age} = profile
// const {skills:anotherSkills} = structuredClone(profile)
// const {name: universityName} = profile.education
// const {education: {name: univName}} = profile

// anotherSkills[2] = "hiking"

// // let {skills} = profile

// // skills = [
// //     ...skills,
// //     "hiking"
// // ]
// // console.log(profile)
// console.log(skills)
// console.log(age)
// console.log(anotherSkills)

// console.log(profile.education.name)

const data = [
    [ 
      0,
      [ 
        1, 
        2, 
        3,
        { 
          string: [
            { value: "world" },
            { value: "hello" }, 
          ]
        }
      ]
    ]
  ];
  const [ , [ , , , { string } ] ] = data;
  const { value: valueNamed } = string[1];
  
  console.log(valueNamed); 
  