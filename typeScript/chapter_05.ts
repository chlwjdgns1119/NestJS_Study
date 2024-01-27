const userName1 = "Bob"; // 정해진 string 값을 가진 것을 문자형 literal이라고 함.
let userName2: string | number = "Tom";

userName2 = 3;

type Job = "police" | "developer" | "teacher";

interface User {
    name: string;
    job: Job;
}

const user1: User = {
    name: "Bob",
    job: "teacher",
}


interface Mobile{
    name: "mobile";
    color: string;
    call(): void;
}

function getGift(gift: Car | Mobile){
    console.log(gift.color);
    if(gift.name === "car") {
        gift.start();
    }
    else{
        gift.call();
    }
}

interface Car{
    name: string;
    color: string;
    start(): void;
}

interface Toy{
    name: string;
    color: string;
    price: number;
}

const toyCar: Toy & Car = {
    name: "타요",
    price: 10000,
    color: "Red",
    start() {},
}
