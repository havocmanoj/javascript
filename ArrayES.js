const foods= [
    { id: 1, title: 'Pizza', price: 250 },
    { id: 2, title: 'Burger', price: 120 },
    { id: 3, title: 'Pasta', price: 150 },
    { id: 4, title: 'Salad', price: 100 },
    { id: 5, title: 'Sushi', price: 300 }
]
//accessing values
//console.log(foods[2].title); // Pasta

//for loop
for (let i = 0; i < foods.length; i++) {
    //console.log(foods[i].title);
}

//document.getElementById("result").innerHTML = foods[2].title;
//for...of loop
for (const food of foods) {
    //console.log(food.title);
}       
//for in loop
for (const foodItem in foods) {
    //console.log(foods[foodItem].title);
}   
//forEach method

foods.forEach((food) => {
    //document.getElementById("result").innerHTML += '<li>'+  food.title +'</li>'
   // console.log(food.title);
}); 

const subjects = ['Math', 'Science', 'History', 'Art'];

function displaySub() {
    for (i=0; i< subjects.length; i++){
    console.log(subjects[i]);
    document.getElementById('subName').innerHTML ='<li>'+ subjects + '</li>'

    }
}
displaySub()


