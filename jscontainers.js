const funcArray = [
    (a,b) => {return {result: a+b}},
    (a,b,c) => {return {result: a+b+c}}
];

console.log(funcArray[0](2,2).result);
console.log(funcArray[1](2,2,2).result);

const funcStuff = () => {
    return [{result:8}]
}

console.log(funcStuff()[0].result)

myMath = {
    add: (a,b) => {return {result: a+b}},
    sub: (a,b) => {return {result: a-b}}
}

console.log(myMath.add(2,2))
