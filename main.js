/**
 * Enum for the gender
 */
const Gender = {
    gender: ["male", "female"]
}

/**
 * Object for the workload
 */
const Workload = {
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

function generateDate(start,end){
    const curYear = new Date().getFullYear()
    const startDate = curYear-end
    const endDate = curYear-start
    var date = (Math.floor(Math.random() * (endDate - startDate)+startDate));
    var hour = 0 + Math.random() * (23 - 0) | 0;
    var isoDate = new Date(date,hour)
    return isoDate
}

/**
 * Output object
 */
function generate(input){
    var dtoOut=[]
    for (let i = 0; i < input.count; i++) {
        var workloadIndex = Math.floor(Math.random()*(3 - 0 + 1)+0)
        var genderIndex = Math.floor(Math.random()*(1 - 0 + 1)+0)
        var birthDate = generateDate(input.age.min, input.age.max)
        person = new Person(Gender.gender[genderIndex],birthDate,1,1,Workload.hours[workloadIndex])
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