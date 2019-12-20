//ARRAY DESTRUCTURING

const myArray = [1, 2, 3, 4];

const [...two] = myArray;

console.log(two);

const myObject = {one: 1, two: 2};

const {three:four=4} = myObject;

console.log(four);


const myFunc = (param) => {
    return [param,()=>{return 1+2}];
}

const [newone, newtwo] = myFunc(5);

console.log(newone+ " " +newtwo())
