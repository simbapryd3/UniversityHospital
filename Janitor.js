const Employees = require("./Employees");
class Janitor extends Employees{
    constructor(name, idNum, position)
    {
        super(name, idNum, position, 40000, false);
        this.position = "Janitor";
        this.salary = 40000;
        this.caresForPatients = false;
        this.isSweeping = this.getRandomBoolean();
    }
    getGwop(){
        return salary;
    }
    getCleaning(){
        if(this.work === true){
            return "Is working hard... sweeping. "
        }
        else{
            return "They must be off today, no one is sweeping! "
            }
     }
    getRandomBoolean() {
        if(Math.random() > .5){return true;}
        else {return false;}
    }
}
module.exports = Janitor;