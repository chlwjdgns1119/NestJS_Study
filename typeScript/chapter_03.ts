type Score = 'A' | 'B' | 'C'


interface User{
    name: string;
    age: number;
    gender? : string;
    readonly birthYear : number;
    [grade:number] : Score;
}

let user:User = {
    name : '최정훈',
    age : 22,
    birthYear : 20031119,
    1 : 'A',
    2 : 'B',
    3 : 'F', // Error
}

interface Add{
    (num1:number, num2:number): number;
}

const add:Add = function(x, y){
    return x+y;
}





interface Benz extends Car{
    door: number;
    stop(): void;
}

const benz: Benz = {
    door: 1,
    stop(){
        console.log('멈춰라');
    },
    color: 'green',
    wheels: 4,
    start(){
        console.log("지금이라고 fiesta 내 맘에 태양을 꾹 삼킨채");
    }
}
class Bmw implements Car{
    color: 'green';
    wheels: 4;
    start(){
        console.log("지금이라고 fiesta 내 맘에 태양을 꾹 삼킨채");
    }
}

/* class Bmw implements Car{
    color;

    constructor(c:string){
        this.color = c;
    }
    wheels: 4;
    start(){
        console.log("지금이라고 fiesta 내 맘에 태양을 꾹 삼킨채");
    }
} */

interface Car {
    color: string;
    wheels: number;
    start(): void;
}

interface Toy {
    price: number;
}

interface ToyCar extends Car, Toy{
    name: string;
}