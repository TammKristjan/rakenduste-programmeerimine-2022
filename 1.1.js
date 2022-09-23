let array = [3, 4, 5, 6];

let modifiedArray = array.map(function(element){
    return element*3;
});

console.log(modifiedArray);

const ages = [12, 14, 18, 19, 29, 40];

const result = ages.filter(checkAdult);

function checkAdult(age){
    return age >= 18;
}

console.log(result)

let numbers = [1, 2, 3];
let sum = numbers.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});

console.log(sum);