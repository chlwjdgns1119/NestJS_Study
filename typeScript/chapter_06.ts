class Car {
    protected name: string = "car";
    color: string; // 멤버 변수를 미리 선언해줘야함.
    constructor(color:string){ // 매개 변수 타입도 미리 선언해줘야함.
        this.color = color;
    }
    start() { 
        console.log("start");
        console.log(this.name);
    }
}

class Bmw extends Car{
    constructor(color: string){
        super(color);
    }
    showName() {
        console.log(super.name);
    }
}

const z4 = 