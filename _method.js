const obj = {
    name: "Haas",
    age: 22,
    skills: ["programming", "swimming"],
    greetings: function(){
        console.log("Helo")
        console.log(`Halo ${this.name}`)
        console.log(`anda memiliki skill: ${this.skills}`)
        // for(let x=0; x < this.skills.length; x++)
        //     console.log(this.skills[x])
    }
        
}
obj.name = "Haas",
obj.skills[2] = "hiking"
obj.greetings()