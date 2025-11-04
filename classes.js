
class Animal {
    legs;
    tail;

    constructor(legs, tail) {
        this.legs = legs;
        this.tail = tail;
      }
        display(){
            console.log('Animal Details:');
            console.log('Legs:', this.legs);
            console.log('Tail:', this.tail);
        }

}
class Human extends Animal{
    nationality;

    constructor(legs, tail, nationality){
        super(legs, tail);
        this.nationality = nationality;}

    display(){
        //super.display();
        console.log('Human Details:');// overriding concept
        console.log('Legs:', this.legs);
        console.log('Tail:', this.tail);
        console.log('National:',this.nationality);
    }
}
let anime= new Animal(4, false, 'Indian');
//anime.display();

let nike= new Human(2, false);
nike.display();// overriding concept with display method
//console.log(siva);

