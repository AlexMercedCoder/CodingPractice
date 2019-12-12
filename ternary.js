let theSwitch = true;
let result = undefined;

if (theSwitch){
    result = 5;
}else {
    result = 3;
}

console.log(result);

let theSwitch2 = undefined;
let result2 = undefined;

result = theSwitch2 ? 5 : 3;

console.log(result);

object1 = {value:5};
object2 = {value:3};

let {value} = theSwitch2 ? object1 : object2;

console.log(value);
