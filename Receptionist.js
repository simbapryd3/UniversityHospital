const Employees = require("./Employees");

class Receptionist extends Employees{
    constructor(name, idNum){
        super(name, idNum, "Receptionist", 45000, false);
        this.salary = 45000;
        this.position;
        this.caresForPatients = false;
    }
    getWorking(){
        if(this.work=== true){
            return "The receptionist is on the phone. "
        }
        else{
            return "Not currently on the phone. "
            }
     } 
}
module.exports = Receptionist; 