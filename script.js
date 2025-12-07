 
 let choclate = "New Element 123";
 let apple = "Apple Element";

 function greeting() {
        let apple = "Orange Element";
        console.log("Local "+apple);
     }

 //console.log("Global Apple Element:", apple );
 //console.log("Hello World");

    greeting();  

    const person = {
        name: "Mano",
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
    Object.assign(person, personMethod); // to merge two objects;
    console.log(person.yearOfBirth());

    // Object clonning;
     const objCopy = Object.assign({}, person);
     console.log(objCopy);
