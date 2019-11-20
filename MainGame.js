const input = require("readline-sync");
const Employees = require("./Employees");
const Doctor = require("./Doctor");
const Surgeon = require("./Surgeon");
const Receptionist = require("./Receptionist");
const Janitor = require("./Janitor");
const VampireJanitor = require("./VampireJanitor");
const Nurse = require("./Nurse");
const Patient = require("./Patient"); 
const Hospital = require("./Hospital");

class MainGame {
    constructor(){
        this.gameHospital = new Hospital(3,3,3,3,1,9);
        this.assignPatientsToNurse();

        //Game starts here
        this.printIntro();
        let userInput;

        //Main Game encapsuled in tick();
        this.tick();

        //Game ends here with a message;
        this.printOutro();
    }

    

    assignPatientsToNurse(){ //evenly distributes patients among nurses
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
        
        if(this.admitPatients.length % this.employedNurses.length > 0){ // this takes care of any remainder patients
            do{
                numOfPatients = numOfPatients-1;
                this.employedNurses.collectionOfPatients[0].push(this.allPatients[numOfPatients]);
            }while(numOfPatients > 0)

        }
    }

    careForPatients(){ //improves patient health
        
        this.displayPatients(true);
        let userInput = input.question("\nWhat would you care for all patients or a specific patient? \nType 'all' to care for all paitents, any key for a specific patient.\n");
        if (userInput.toLowerCase() === "all"){
            let counter = this.gameHospital.allPatients.length -1;
            do{
                // this.gameHospital.allPatients
                this.gameHospital.allPatients[counter].bloodLevel + 40;
                this.gameHospital.allPatients[counter].healthLevel + 40;
                counter = counter - 1;
            } while(counter >= 0);

            console.log("Patients have been cared for, new levels:\n");
            this.displayPatients(true);
        } else {
            userInput = input.question("\nWhich Patient would you like to care for? (Choose Patient number shown, or any other key to exit).\n");
            if((userInput > 1) && (userInput <this.gameHospital.allPatients.length)){
                this.gameHospital.allPatients[userInput -1].bloodLevel + 40;
                this.gameHospital.allPatients[userInput -1].healthLevel + 40;
                console.log("\nNew Patient Level");
                console.log(this.gameHospital.allPatients[userInput -1]);
                console.log(this.gameHospital.allPatients[userInput -1].patientName + " feels better now!\n");               
            }
            else {
                console.log("Invalid input, Patients not cared for...\n");
            }
        }

    }

    cleanHospital(){ //Increases hospital cleanliness
        console.log("Hospital cleanliness level = " + this.gameHospital.hospitalCleanliness + "\n");
        let userInput = input.question("\nWould you like to clean the Hospital? Y/N\n");
        
        if (userInput.toLowerCase() = "y"){
            this.gameHospital.hospitalCleanliness = this.gameHospital.hospitalCleanliness +(10 * (this.gameHospital.employedJanitors.length - this.gameHospital.employedVampJanitors.length)); 
            console.log("Hospital cleanliness level = " + this.gameHospital.hospitalCleanliness + "\n");
        } else{
            console.log("Hospital has not been cleaned...\n")
        }

    }

    displayEmployees(showStat){ //shows all employees of the hospital
        let counter = 0;
        do{

            console.log("Employee no. " + (counter+1));
            console.log("Name: " + this.gameHospital.allEmployees[counter].name);
            console.log("Position: " + this.gameHospital.allEmployees[counter].position);
            if(showStat){
                console.log("Salary: " + this.gameHospital.allEmployees[counter].salary);
                if (this.gameHospital.allEmployees[counter].careForPatients){
                    console.log("Cares for Patients: Yes");
                }else ("Cares for Patients: No");

                switch(this.gameHospital.allEmployees[counter].position.toLowerCase()){
                    case "doctor":
                        console.log("Specialty: " + this.gameHospital.allEmployees[counter].specialty);
                        break;
                    
                    case "surgeon":
                            console.log("Specialty: " + this.gameHospital.allEmployees[counter].surgicalSpecialty);
                        break;

                    case "receptionist":
                            console.log("Busy on the phone.");
                        break;

                    case "nurse":
                            console.log("Busy caring for patients.");
                        break;

                    case "janitor":
                        console.log("Appears to be cleaning and acting normally.");
                        break;

                    case "vampire janitor":
                            console.log("Really wants to drink your blood...");
                        break;

                    default:
                        break;

                }
            }
            console.log("\n");
            counter = counter + 1;
        } while (counter < this.gameHospital.allEmployees.length)
    }

    displayNursesPatients(){ //Shows which patients are assigned to which nurse
        let counter1 = 0; //cycles through nurses
        let counter2 = 0; //cycles through patients

        let userInput = input.question("\nWould you like to see patient stats? Y/N");
        if (userInput.toLowerCase() === "y"){
            let showStat = true;
        } else{
            showStat = false;
        }
        console.log();
        

        do{ //loop 1 = nurses
            console.log("Showing patients of Nurse " + (counter +1) + ": " +this.gameHospital.employedNurses[counter1]);

            do{ //loop 2 = each nurse's patients
                console.log();
                console.log("Patient #" + (counter2 +1) + " Name: " + this.gameHospital.employedNurses[counter1].collectionOfPatients[counter2].patientName);
                if (showStat){
                    console.log("Health Level: " + this.gameHospital.employedNurses[counter1].collectionOfPatients[counter2].bloodLevel);
                    console.log("Blood Level: " + this.gameHospital.employedNurses[counter1].collectionOfPatients[counter2].healthLevel);
                }
            } while (counter2 < this.gameHospital.employedNurses[counter1].collectionOfPatients.length);

            counter1 = counter1 +1;
        } while (counter1 < this.gameHospital.employedNurses.length) //loop 1 = nurses

        console.log("\n\n");

    }

    displayPatients(showStat){ //Displays all patients or one specific patient
        let counter = 0;
        do{
            console.log("Patient no. "+ (counter +1) +"\n\n");
            console.log( this.gameHospital.allPatients[counter].patientName);
            if (showStat){
                console.log( this.gameHospital.allPatients[counter].bloodLevel);
                console.log( this.gameHospital.allPatients[counter].healthLevel);
            }
            counter = counter + 1;
        }while (counter < this.gameHospital.allPatients.length -1);
    }

    showMenu(){ //Prints Choices for User
        console.log("\nWhat would you like to do");
        console.log("-------------------------\n");   
        console.log("1. Display list of Employees\n");
        console.log("2. Display Employee properties\n");
        console.log("3. Display Nurses' Roster of Patients\n");
        console.log("4. Display list of Patients\n");
        console.log("5. Display Patients' Stats\n");
        console.log("6. Care for one or all Patienets\n");
        console.log("7. Manage Hospital Cleanliness\n");
        console.log("Type 'exit' to quit\n");
        let userInput = input.question("\nWhat would you like to do? ");

        return userInput;
    }

    subtick(){ //depreciates hospital cleanliness and patient health each time tick is repeated

        //Hospital cleanliness reduced here:
        this.gameHospital.hospitalCleanliness = this.gameHospital.hospitalCleanliness -15;
        if (this.gameHospital.hospitalCleanliness < 45){
            console.log("\nHospital is getting dirty!");
            console.log("Hospital must be cleaned")
        }

        //Patient wellness reduced here
        let counter = this.gameHospital.allPatients.length -1;
        let warning = false;

        do{
            // this.gameHospital.allPatients
            this.gameHospital.allPatients[counter].bloodLevel - 10;
            this.gameHospital.allPatients[counter].healthLevel - 10;

            if (this.gameHospital.allPatients[counter].healthLevel < 30){
                warning = true;
            }
            if (this.gameHospital.allPatients[counter].bloodLevel < 30){
                warning = true;
            }
            counter = counter - 1;
        } while(counter >= 0);

        if (warning){
            console.log("Warning: Patients are getting sicker!");
        }
    }

    tick(){ //Main Game Loop
        do{ 
            userInput = this.showMenu();

            switch(userInput.toLowerCase()){
                case "1": this.displayEmployees(false); //Shows Employees - Complete
                break;
                
                case "2": this.displayEmployees(true); //Employee Stats - Complete
                break;

                case "3": this.displayNursesPatients(); // Shows breakdown of each nurse's patients - complete
                break;

                case "4": this.displayPatients(false); //Shows Patients - Complete
                break;

                case "5": this.displayPatients(true); //Patient Stats - Complete
                break;

                case "6": this.careForPatients(); //Complete
                break;

                case "7": this.cleanHospital(); //Complete
                break;

                case "exit":
                break;

                default: console.log("\nnot a valid input!\n");
                break;

            }

            this.subtick();

        }while (userInput.toLowerCase() != "exit") ;


    }

    printIntro(){ //prints hello message
        console.log("\nWelcome to High-Street Hospital");
        console.log("-------------------------------\n");
    }

    printOutro(){ //prints goodbye message
        console.log("\nThanks for helping the Hospital!");
        console.log("See you Soon!\n");
    }
}

module.exports = MainGame;