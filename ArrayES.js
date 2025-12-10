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
    console.log(foods[i].price);
}

document.getElementById("result").innerHTML = foods[2].title;
