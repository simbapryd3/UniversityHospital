const Employees = require("./Employees");
const Doctor = require("./Doctor");

class Surgeon extends Doctor {
    constructor(name, idNum, position = "Surgeon", salary = 120000, caresForPatients, specialty, surgicalSpecialty)
    { 
        super(name, idNum, position, salary, caresForPatients, specialty, surgicalSpecialty);
        this.position = "Surgeon";
        this.salary = 120000;
        this.surgicalSpecialty = this.getSurgicalSpecialty(surgicalSpecialty);
        this.caresForPatients = true;
    }

    getSurgicalSpecialty(X = (Math.floor(6 * Math.random()))){
        let specialtyArray = ["Anesthesiology", "Cardiology","Osteopathy", "Gastro-intestinal", "Neurology", "Respiratory" ];
        return specialtyArray[X];  
        
    }
}
module.exports = Surgeon;