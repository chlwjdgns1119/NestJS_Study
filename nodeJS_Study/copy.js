const original = {
    num: 1000,
    bool: true,
    str: "test",
    func: function () {
      console.log("func");
    },
    obj: {
      x: 1,
      y: 2,
    },
    arr: ["A", "B", "C"],
  };

const clone1 = original;

original.num = 2000;
console.log(clone1.num);

original.bool = false;
console.log(clone1.bool);

console.log(clone1 === original);

const clone2 = Object.assign({}, original);

original.num = 3000;
console.log(clone2.num);

console.log(clone2.obj.x);
original.obj.x = 3;
console.log(clone2.obj.x);

const clone3 = {...original};
original.num = 4000;
console.log(clone3.num);

original.obj.y = 3;
console.log(clone3.obj.y);

clone3.arr.push("D");
console.log(original.arr[3]);

const clone4 = JSON.parse(JSON.stringify(original));
original.obj.x = 5;
console.log(clone4.obj.x);
console.log(original.obj.x);

console.log(original.func); 
console.log(clone4.func); 

function clone(source){
  var target = {};
  for(let i in source){
    if(source[i] != null && typeof source[i] === "object"){
      target[i] = clone(source[i]);
    }
    else{
      target[i] = source[i];
    }
  }
  return target;
}

const clone5 = clone(original);
console.log(original.func);
console.log(clone5.func);

const _ = require("lodash");
const clone6 = _.cloneDeep(original);

console.log(original.func);
console.log(clone6.func);

delete original.func; // ⚠️ 함수 속성은 오류를 발생시키므로 제거
const clone7 = structuredClone(original);

original.obj.x = 4;
console.log(clone7.obj.x); // 3

clone7.arr.push("F");
console.log(original.arr); // ["A", "B", "C", "D", "E"]

console.log(original.obj === clone7.obj); // false
console.log(original.arr === clone7.arr); // false