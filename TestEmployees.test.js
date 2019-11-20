const Employees = require("./Employees");
const Doctor = require("./Doctor");
const Surgeon = require("./Surgeon");
const Receptionist = require("./Receptionist");
const Janitor = require("./Janitor");
const VampireJanitor = require("./VampireJanitor");
const Nurse = require("./Nurse");

//const EmployeeMaker = require("./EmployeeMaker");
//const underTest = new EmployeeMaker;

describe("Employees", () =>{
    test("does Employees work?", () =>{

         let testEmployee = new Employees("Dr. Pryde", "123", "Doctor", 999999, true);
         //testEmployee.name = "Jason";
         //testEmployee.idNum = 123;

        expect(testEmployee.name).toEqual("Dr. Pryde");
        expect(testEmployee.idNum).toEqual("123");
        expect(testEmployee.position).toEqual("Doctor");
        expect(testEmployee.salary).toEqual(999999);
        expect(testEmployee.caresForPatients).toBeTruthy();
    })

    test("does Doctor class work?", () =>{

        let testDoctor = new Doctor("Dr. Omar", "123", "Random", 999999, true, 3);

        expect(testDoctor.name).toEqual("Dr. Omar");
        expect(testDoctor.idNum).toEqual("123");
        expect(testDoctor.position).toEqual("Doctor");
        expect(testDoctor.salary).toEqual(90000);
        expect(testDoctor.specialty).toEqual("Family");
        expect(testDoctor.caresForPatients).toBeTruthy();

        expect().toEqual();
    })

    test("Does Surgeon class work", () =>{
        let testSurgeon = new Surgeon("Surgeon Omar", "234", "blah" , 999999, true, 3, 3);

        expect(testSurgeon.name).toEqual("Surgeon Omar");
        expect(testSurgeon.idNum).toEqual("234");
        expect(testSurgeon.position).toEqual("Surgeon");
        expect(testSurgeon.salary).toEqual(120000);
        expect(testSurgeon.surgicalSpecialty).toEqual("Gastro-intestinal");
        expect(testSurgeon.caresForPatients).toBeTruthy(); 

    })

    test("Does Receptionist class work", () =>{
        let testReceptionist = new Receptionist("Hot-Messica", "234");

        expect(testReceptionist.name).toEqual("Hot-Messica");
        expect(testReceptionist.idNum).toEqual("234");
        expect(testReceptionist.position).toEqual("Receptionist");
        expect(testReceptionist.salary).toEqual(45000);
        expect(testReceptionist.caresForPatients).toBeFalsy(); 

    })

    test("Does Janitor class work", () =>{
        let testJanitor = new Janitor("John I. Tor", "234vfr");

        expect(testJanitor.name).toEqual("John I. Tor");
        expect(testJanitor.idNum).toEqual("234vfr");
        expect(testJanitor.position).toEqual("Janitor");
        expect(testJanitor.salary).toEqual(40000);
        expect(testJanitor.caresForPatients).toBeFalsy(); 

    })

    test("Does VampireJanitor class work", () =>{
        let testVampireJanitor = new VampireJanitor("Vampire John I. Tor", "xxxvfr123");

        expect(testVampireJanitor.name).toEqual("Vampire John I. Tor");
        expect(testVampireJanitor.idNum).toEqual("xxxvfr123");
        expect(testVampireJanitor.position).toEqual("Vampire Janitor");
        expect(testVampireJanitor.salary).toEqual(40000);
        expect(testVampireJanitor.caresForPatients).toBeFalsy(); 

    })

    test("Does Nurse class work", () =>{
        let testNurse = new Nurse("Mortimer", "876ght");

        expect(testNurse.name).toEqual("Mortimer");
        expect(testNurse.idNum).toEqual("876ght");
        expect(testNurse.position).toEqual("Nurse");
        expect(testNurse.salary).toEqual(50000);
        expect(testNurse.collectionOfPatientsSize).toEqual(10);
        expect(testNurse.caresForPatients).toBeTruthy(); 

    })



})
