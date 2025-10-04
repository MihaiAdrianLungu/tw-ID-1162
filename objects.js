const user = {
    name: 'Adrian',
    sayHello: function() {
        console.log("Hello", this.name);
    },
    sayHello2: () => {
        console.log("Hello2", this.name);
    }
}

user['name'] = 'John';

user.age = 30;

console.log(user);

// function add(a, b) {
//     return a + b;
// }

// const add2 = (a, b) => a + b;

// user.sayHello();
// user.sayHello2();