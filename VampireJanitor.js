const Employees = require("./Employees");
const Janitor = require("./Janitor");

class VampireJanitor extends Janitor{
    constructor(name, idNum){
        super(name, idNum, "Vampire Janitor");
        this.position = "Vampire Janitor";
    }

 
} 
module.exports = VampireJanitor;
