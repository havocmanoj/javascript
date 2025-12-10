 
 let choclate = "New Element 123";
 let apple = "Apple Element";

 function greeting() {
        let apple = "Orange Element";
        //console.log("Local "+apple);
     }

 //console.log("Global ", apple );
 //console.log("Hello World");

    greeting();  

    const person = {
        firstName: "Mano",
        lastName: "Kumar",
        age: 23,
        greet() {
            console.log("Hello, " + this.name);
        },
        favColor: "blue"
    }
    const personMethod ={
        yearOfBirth() {
            return 2025 - this.age;  // new Date().getFullYear() - this.age;
        },
    }
    // to merge two objects;
    Object.assign(person, personMethod); 
    //console.log(person.yearOfBirth());

    // Object clonning;
     const objCopy = Object.assign({}, person);
     //console.log(objCopy);

    //But ES6 has better way to merge called Spread Operator
    const finalObj = {...person, ...personMethod};
    //console.log(finalObj);

    // Delete Operator
    delete finalObj.age;
    //console.log(finalObj);

    function getFullName(firstName, lastName) {
        return {
            firstName,
            lastName,
        }
    }
    //console.log(getFullName('Manoj','Kumar'))
    //console.log(person)

    // Object Destructuring
    const {firstName, age, favColor = 'red', father_age= 12, lastName : myLastName} = person;
    console.log(firstName, age, father_age, favColor, myLastName);
    // here favColor and father_age values set to default and lastName is renamed to myLastName;

    // destructure and use rest operator
    let num1, num2;

    ({num1, num2, ...others} = {num1: 10, num2: 20, num3: 30, num4: 40})
    console.log(num1, num2, others);

    // Destructuring in function parameters
    function DisplayUser({firstName, age,  favColor: favouriteColor}) {
        console.log(`Hello this is ${firstName} and my age is ${age}, My favourite color is ${favouriteColor}`);
        
    }
    DisplayUser(person);