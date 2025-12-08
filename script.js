 
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
        age: 23,
        greet() {
            console.log("Hello, " + this.name);
        }   
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
    const {firstName, age} = person;
    console.log(firstName, age);