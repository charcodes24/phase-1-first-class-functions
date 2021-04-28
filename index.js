function receivesAFunction(callback) {
    callback();
};

function returnsANamedFunction() {
    let namedFunction = () => console.log(`I'm a named function.`);
    return namedFunction;
};

function returnsAnAnonymousFunction() {
    return function() {console.log(`I'm an anonymous function.`)};
};