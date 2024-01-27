// 제너릭을 이용하면 함수를 사용할 때 직접 타입을 명시 가능

function getSize<T>(arr:T[]): number {
    return arr.length;
}

getSize<number>([1, 2, 3]);
getSize<string>(["a", "b", "c"]);

const arr3 = [false, true, false];
getSize(arr3); // <>를 안 써도 알아서 타입을 추론해줌. <>는 강제하고 싶은 경우에 사용하면 됨.


interface Mobile2<T>{
    name: string;
    price: number;
    option: T;
}

const m1: Mobile2<object> = {
    name: "s21",
    price: 100000,
    option : {
        color: "red",
        coupon: false
    }
}
    
const m2: Mobile2<string> = {
    name: "s21",
    price: 100000,
    option : "Ultra"
}
