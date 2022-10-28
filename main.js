/**
 * Enum for the gender
 */
const gender = {
    gender: ["male", "female"]
}

/**
 * Object for the workload
 */
const workload = {
    hours : [10,20,30,40]
}

/**
 * Input object
 */
const dtoIn = {
    count:50,
    age : {
        min: 19,
        max: 35
    }

}

class Person  {
    birthdate
    name
    surname
    workload
    constructor(gender,birthdate,name,surname,workload){
        this.gender = gender
        this.birthdate = birthdate
        this.name = name
        this.surname = surname
        this.workload = workload
    }
}

/**
 * Output object
 */
// const dtoOut = {}
function generate(input){
    var dtoOut=[]
    for (let i = 0; i < input.count; i++) {
        var workloadIndex = Math.floor(Math.random()*(3 - 0 + 1)+0)
        var genderIndex = Math.floor(Math.random()*(1 - 0 + 1)+0)
        person = new Person(gender.gender[genderIndex],1,1,1,workload.hours[workloadIndex])
        dtoOut.push(person)
    }
    console.log(dtoOut)
}

function main() {
    generate(dtoIn)

}

if (require.main === module) {
    main();
  }