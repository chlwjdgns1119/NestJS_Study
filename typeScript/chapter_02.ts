let car = "bmw";

let age:number = 3;
let isAdult:boolean = true;
let a:number[] = [1, 2, 3];
let a2:Array<number> = [1,2,3];

let week1:string[] = ["1","2","3"];
let b:[string, number]; // 튜플은 배열과 비슷한 모양으로 인덱스 별로 타입이 다를 때 이용가능함.

b = ['z', 1 ];
b[0].toLocaleLowerCase();
console.log(b[0])

// :찍고 void로 표시 가능함.
function sayHello():void{
    console.log("Hello");
}

// never는 err를 반환하거나 영원히 끝나지 않는 함수 타입에서 사용가능.
function showError():never{
    throw new Error();
}

function infLoop():never{
    while(true){
        // do something
    }
}

// enum 
enum OsType {
    Window = 'win',
    Ios = 'ios',
    Android = 'and'
}

let myOs:OsType; // myOs는 OsType에 있는 값들만 받을 수 있게됨.

myOs = OsType.Window;

// null, undefined  

let c:null = null;
let d:undefined = undefined;
