const Employees = require("./Employees");
const Patient = require("./Patient"); 

class Nurse extends Employees{
    constructor(name, idNum, collectionOfPatients){
        super(name, idNum, "Nurse", 50000, true);
        this.collectionOfPatients = collectionOfPatients;
    }

}
module.exports = Nurse;
