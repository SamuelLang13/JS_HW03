/**
 * Enum for the gender
 */
const gender = {
    male: 'male',
    female: 'female'
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

/**
 * Output object
 */
const dtoOut = {
    gender,
    birthdate,
    firstName,
    surname,
    workload
}

function main() {
    dtoOut = new dtoOut()

}