
//Normal obj
const foods= [
    { id: 1, title: 'Pizza', price: 250, title: 'Biriyani' },
    { id: 2, title: 'Burger', price: 120 },
    { id: 3, title: 'Pasta', price: 150 },
    { id: 4, title: 'Salad', price: 100 },
    { id: 5, title: 'Sushi', price: 300 }
]

console.log(foods[0].title);// it will print recent duplicate one

//Mab obj
const myMap = new Map()

myMap.set('name', 'Mano')
myMap.set('class', 'Mathematics')
myMap.set('std', 12)
//myMap.set({}, emptyObj)
//myMap.set(function(){}, 'empty function')

//myMap.clear()
//myMap.delete('')
//console.log(myMap.size)

const myNumber = new Map(
    [
        [1, 'One'],
        [2, 'Two'],
        [3, 'Three']
    ]
)


