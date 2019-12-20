"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var firstDec = function (target) {
    console.log(target);
};
var SomeClass = /** @class */ (function () {
    function SomeClass() {
    }
    SomeClass = __decorate([
        firstDec
    ], SomeClass);
    return SomeClass;
}());
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
