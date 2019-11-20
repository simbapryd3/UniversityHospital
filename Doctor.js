const Employees = require("./Employees");
const input = require("readline-sync");

class Doctor extends Employees{
    constructor (name, idNum, position , salary, caresForPatients, specialty)
    {
        super(name, idNum, position, 90000, true);
        this.position = "Doctor";
        this.salary = 90000
        this.specialty = specialtyArray//this.getSpecialty(specialty);
        this.caresForPatients = true;
        
    }
    // getSpecialty(getSpecialty){
    //     let specialtyArray = ["Radiology", "Cardiology","Medicine", "Family", "Neurology", "Psychiatry" ];
    //     return specialtyArray[getSpecialty];
    //     //return = specialtyArray[(Math.floor(6 * Math.random()))];
    // }
}


module.exports = Doctor;