const greeting = "Hello";

function receivesAFunction (greeting) {
    return greeting();
}

function returnsANamedFunction(greeting) {
    return friendGreeting;
}

function friendGreeting(hiCharles, greeting, friendName) {
    return hiCharles(greeting, friendName);
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('I am anonymous.')
    }
}