interface User8{
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
}


type UserKey = keyof User8; // keyof 키워드를 쓰면 오른쪽과 같은 역할을 한다. 'id' | 'name' | 'age' | 'gender' 
const uk:UserKey = "id";

// partial
// 필요한 거만 뽑아서 사용가능, 없는 거 추가하려고 하면 안됨.
/* interface User8{
    id?: number;
    name?: string;
    age?: number;
    gender?: "m" | "f";
    와 똑같은 기능을 하게 된다고 보면 됨.
} */
let admin1: Partial<User8> = {
    id: 1,
    name: "Bob",
};

// required는 모든 프로퍼티를 필수로 바꿔줌.

// readonly는 읽기 전용으로 바꿈
let admin3: Readonly<User8> = {
    id: 1,
    name: "Bob",
    age: 22,
    gender: 'm',
}

admin3.id = 4; // 이건 불가능해짐

// Record<K, T>

// Pick<T, K>
interface User{
    id: number;
    age: number;
    name: string;
    gender: "M" | "F";
}

//id와 name만 가지고 와서 사용가능하다.
const admin: Pick<User, "id" | "name"> = {
    id: 0,
    name: "Bob",
};

type T1 = string | number | boolean;
type T2 = Exclude<T1, number>; // boolean만 남게됨.

type T1 = string | null | undefined | void;
type T2 = NonNullable<T1>; // string, void만 남게 됨.