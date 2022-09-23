console.log("hi")

function sayHi(){
    return 'hello'
}

console.log(sayHi())

const arrowFunction = () => {
    return 'hello from arrow function'
}

console.log(arrowFunction())

const shortArrowFunction = () => 'hello from short arrow function'

a = 3
b = 4

function first(){
    return a+b
}

console.log(first())

const second = () => {
    return a+b
}

console.log(second())

const third = () => a+b

console.log(third())

const sumA = a => b => a+b

console.log(sumA(3))

function sumAB(a){
    return function(b){
        return a+b
    }
}

console.log('sumAB', sumAB(3)(4))