function Add(num1:number, num2:number):number{
    return num1 + num2;
}

// ?가 있으면 있어도 되고 없어도 되는 파라미터임. 선택적 매개변수라고함.
function hello(name?: string){
    return `Hello, ${name|| "world"}`;
}

const result = hello();

console.log(result);

// 아래와 같이 필수 매개변수는 선택적 매개 변수 뒤로 올 수 없음.
function hello2(age?: number, name: string):string{
    return `Hello, ${name}. You are ${age}.`;
}

// ...을 사용하면 값을 배열로 읽음. 따라서 파라미터도 number로 기입해줌.
function Add1(...nums: number[]){
    return nums.reduce((result, num) => result + num, 0);
}
/* 
interface User {
    name: string;
}

// this의 경우 아래와 같이 타입을 명시해줄 수 있음.
function showName(this:User):void{
    console.log(this.name)
}

// this의 경우 아래와 같이 타입을 명시해줄 수 있음.
function showName(this:User, age:number, gender:'m'|'f'):void{
    console.log(this.name)
}
 */

// 함수 오버로딩

interface User {
    name: string;
    age: number;
}

function join(name:string, age:number): User;
function join(name:string, age:string): string;
function join(name:string, age:number | string): User | string{
    if(typeof age === "number"){
        return {
            name,
            age,
        };
    } else{
        return "나이는 숫자로 입력해주세요.";
    }
}

