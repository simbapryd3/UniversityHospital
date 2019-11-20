const Employees = require("./Employees");
const Doctor = require("./Doctor");
const Surgeon = require("./Surgeon");
const Receptionist = require("./Receptionist");
const Janitor = require("./Janitor");
const VampireJanitor = require("./VampireJanitor");
const Nurse = require("./Nurse");
const Patient = require("./Patient"); 

class Hospital {
    constructor(numOfDoctors, numOfSurgeons, numOfReceptionists, numOfJanitors, numOfVampJanitors, numOfPatients){
        this.employedDoctors = this.hireDoctors(numOfDoctors);
        this.employedSurgeons = this.hireSurgeons(numOfSurgeons);
        this.employedReceptionists = this.hireReceptionists(numOfReceptionists);
        this.employedJanitors = this.hireJanitors(numOfJanitors);
        this.employedVampJanitors = this.hireVampJanitors(numOfVampJanitors);
        this.employedNurses = this.hireNurses(numOfNurses);
        this.allEmployees = this.getAllEmployees();
        this.allPatients = this.admitPatients(numOfPatients);
        this.hospitalCleanliness = Math.floor(100 * Math.random());

    }

    admitPatients(numOfPatients){ //generates random list of patients to admit into hospital

        let admitedPatients = []
        let name;
        let newPatient;
        

        do{
            name = getRandomName();

            newPatient = new Patient(name);
            admitedPatients.push(newPatient);

            counter = counter + 1;

        } while (counter < numOfPatients);
        
        return admitedPatients;
    }

    getAllEmployees(){ //consolidates all employees into one array
        let counter;

        // Push Doctors
        counter = this.employedDoctors.length;
            do{
                counter = counter - 1;
                allEmployees.push(this.employedDoctors[counter]);
            }while (counter > 0);

        // Push Surgeons
        counter = this.employedSurgeons.length;
        do{
            counter = counter - 1;
            allEmployees.push(this.employedSurgeons[counter]);
        }while (counter > 0);

        // Push Receptionists
        counter = this.employedReceptionists.length;
        do{
            counter = counter - 1;
            allEmployees.push(this.employedReceptionists[counter]);
        }while (counter > 0);

        // Push Nurses
        counter = this.employedReceptionists.length;
        do{
            counter = counter - 1;
            allEmployees.push(this.employedReceptionists[counter]);
        }while (counter > 0);

        // Push Janitors
        counter = this.employedJanitors.length;
        do{
            counter = counter - 1;
            allEmployees.push(this.employedJanitors[counter]);
        }while (counter > 0);

        // Push Vampire Janitors
        counter = this.employedVampJanitors.length;
        do{
            counter = counter - 1;
            allEmployees.push(this.employedVampJanitors[counter]);
        }while (counter > 0);

        return this.allEmployees;
    }

    getRandomID(){ //used to generate a random id for employees
        let idLength = 6;
        let empId =  "";

        while(idLength > 0) {
        const idArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"];
        empId = empId + idArray[getRandomElement(idArray.length)];
        idLength --;
            }   
        return empId;
    }

    getRandomName(){ //used to select a random name for each employee or patient
        nameArray = ["Josh", "David", "Marie", "Ana", "Joe", "Layla", "Paul", "Chris", "Christina", "Paulina", "Krista", "Donald", "Goofy", "Minnie", "Leslie", "Bill", "Lacey", "Kendra", "Karen", "Katherine", "Tracey", "Richard", "Erica", "Juan", "Ricardo", "Fernanda", "Maria", "Juanita", "Lola" ];
        return  nameArray[Math.floor((nameArray.length * Math.random())) - 1];
    }

    hireDoctors(numberOfDoctors){ //generates an array of random doctors who work at the hospital 

        let employedDoctors = []
        let name;
        let idNum;
        let counter;
        let newDoctor;

        do{
            name = "Dr. " + getRandomName();
            idNum = getRandomID();

            newDoctor = new Doctor(name, idNum, "Doctor", 90000, true);
            employedDoctors.push(newDoctor);

            counter = counter + 1;

        } while (counter < numberOfDoctors);
    
        return employedDoctors;
    
    }

    hireJanitors(numberOfJanitors){ //generates an array of random janitors who work at the hospital

        let employedJanitors = []
        let name;
        let idNum;
        let counter;
        let newJanitor;

        do{
            name = getRandomName();
            idNum = getRandomID();

            newJanitor = new Janitor(name, idNum, "Janitor");
            employedJanitors.push(newJanitor);

            counter = counter + 1;

        } while (counter < numberOfJanitors);
        
        return employedJanitors;
        
    }

    hireNurses(numberOfNurses){ //generates an array of random nurses who work at the hospital

        let employedNurses = []
        let name;
        let idNum;
        let counter;
        let newNurses;
        let patientsList;

        do{
            name = getRandomName();
            idNum = getRandomID();
            patientsList = getPatientsList(sizeOfList)

            newNurses = new Nurse(name, idNum, patientsList);
            employedNurses.push(newNurses);

            counter = counter + 1;

        } while (counter < numberOfNurses);
        
        return employedNurses;
        
    }

    hireReceptionists(numberOfReceptionists){ //generates an array of random receptionists who work at the hospital

        let employedReceptionists = []
        let name;
        let idNum;
        let counter;
        let newReceptionist;

        do{
            name = getRandomName();
            idNum = getRandomID();

            newReceptionist = new Receptionist(name, idNum);
            employedReceptionists.push(newReceptionist);

            counter = counter + 1;

        } while (counter < numberOfReceptionists);
    
        return employedReceptionists
    }

    hireSurgeons(numberOfSurgeons){ //generates an array of random surgeons who work at the hospital

        let employedSurgeons = []
        let name;
        let idNum;
        let counter;
        let newSurgeon;

        do{
            name = "Surgeon " + getRandomName();
            idNum = getRandomID();

            newSurgeon = new Surgeon(name, idNum, "Surgeon", 120000, true);
            employedSurgeons.push(newSurgeon);

            counter = counter + 1;

        } while (counter < numberOfSurgeons);
    
        return employedSurgeons;
    
    }

    hireVampJanitors(numberOfVampJanitors){ //generates an array of random vampire janitors who work at the hospital

        let employedVampJanitors = [];
        let name;
        let idNum;
        let counter;
        let newVampJanitors;

        do{
            name = getRandomName();
            idNum = getRandomID();

            newVampJanitors = new VampireJanitor(name, idNum);
            employedVampJanitors.push(newVampJanitor);

            counter = counter + 1;

        } while (counter < numberOfVampJanitors);

        return employedVampJanitors;
    }
    getCollectionOfPatients(){
        let numOfNurses = this.employedNurses.length ;
        let numOfPatients = this.admitPatients.length;
        let counter1 = numOfNurses -1;
        let counter2 = Math.floor(numOfPatients/numOfNurses) -1;

        do{ //this cycles through Nurses
            counter2 =Math.floor(numOfPatients/numOfNurses); //resets counter2 from Zero at end of each 
                                                            //loop to number of patients, to assign to next nurse.
            do { //this cycles through Patients
                numOfPatients = numOfPatients-1
                this.employedNurses[counter1].collectionOfPatients.push(this.allPatients[numOfPatients]);
                counter2 = counter2 -1;
            } while(counter2 > 0);
            counter1 = counter1 -1;
        } while(counter1 > 0);
        //after we make sure above loop works, make another to work on remainder
        
        if(this.admitPatients.length % this.employedNurses.length > 0){
            do{
                numOfPatients = numOfPatients-1;
                this.employedNurses.collectionOfPatients[0].push(this.allPatients[numOfPatients]);
            }while(numOfPatients > 0)

        }
}

}

module.exports = Hospital;