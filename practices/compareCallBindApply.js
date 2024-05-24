const person1 = {firstName: 'Dustin', lastName: 'Pro'};
const person2 = {firstName: 'Thomas', lastName: 'Pu'};

function say(greeting1, greeting2) {
    console.log(greeting1 + ',' + greeting2 + ' ' + this.firstName + ' ' + this.lastName);
}

// Call
console.info("Call");
say.call(person1, 'Hello', 'Good morning');
say.call(person2, 'Hello', 'Good morning');

// Apply
console.info("Apply");
say.apply(person1, ['Hello', 'Good morning']);
say.apply(person2, ['Hello', 'Good morning']);

// Bind
console.info("Call")
const sayHelloDustin = say.bind(person1, 'Hello', 'Good morning')();
const sayHelloThomas = say.bind(person2, 'Hello', 'Good morning')();

// sayHelloDustin();
// sayHelloThomas();