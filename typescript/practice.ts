// console.log(Object.entries({name: 'alex', age: 34}));
// console.log(Object.fromEntries([ [ 'name', 'alex' ], [ 'age', 34 ] ]));

// const myArray = [1,[1,2],3,[4,5,[1,2]]];
// console.log(myArray.flat());
// console.log(myArray.flat(2));

myArray2 = [[1,2],[1,3],[1,4]];

// console.log(myArray2.map(item => console.log(item)));
console.log(myArray2.map(item => item.filter(set => set != 1)))
console.log(myArray2.flatMap(item => item.filter(set => set != 1)))

















// abstract class Animal{
//
//     public name: string;
//     protected legs: number;
//     protected arms: number;
//
//     constructor (name: string) {
//         this.name = name;
//         this.legs = 0;
//         this.arms = 0;
//     }
//
//     sound(){
//         console.log('sound')
//     }
//
//
// }
//
//
// ////////////////////////////////
//
// class Dog extends Animal {
//
//     constructor(name: string){
//         super(name);
//         this.legs = 4;
//     }
//
//     sound():void {
//         console.log('Bark')
//     }
//
//     legCheck ():void {
//         console.log(this.legs)
//     }
//
//     static addNums (a:number, b:number):number{
//         return a + b;
//     }
//
// }
//
// const Sparky = new Dog('Sparky');
//
// console.log(Sparky.name);
//
// Sparky.legCheck();
//
// console.log(Dog.addNums(5,5));
//
// const myFunc (dog: Dog):Dog {
//
// }
