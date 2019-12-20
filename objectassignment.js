MyObject = {
    prop1: 'hello',
    prop2: 'goodbye'
}

{method} = request

MyObject.prop3 = 'maybe'

console.log(MyObject.prop1)
console.log(MyObject.prop3)

for (i = 0; i < 5; i++){

    MyObject[`custom${i}`] = i;

}

console.log(MyObject);

const { custom4 } = MyObject;

console.log(custom4);
