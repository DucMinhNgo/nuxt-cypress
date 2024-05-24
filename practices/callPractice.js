// Case 1:
var animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
];

for (var i = 0; i < animals.length; i++) {
    (function(i) {
        this.print = function() {
        console.log('#' + i + ' ' + this.species
                    + ': ' + this.name);
        }
        this.print();
    }).call(animals[i], i);
}

// Case 2:
function greet() {
    const reply = [this.person, "Is An Awesome", this.role].join(" ");
    console.log(reply);
}

const x = {
    person: 'Dustin',
    role: 'Developer',
}

greet.call(x)

// Case 3:

function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = "food";
}

function Toy(name, price) {
    Product.call(this, name, price);
    this.category = "toy"
}

const p = new Product("product 1", 100);
const f = new Food("food 1", 200);
const t = new Toy("toy 1", 300);
console.log(p);
console.log(f);
console.log(t);