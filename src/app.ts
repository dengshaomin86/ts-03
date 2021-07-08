import { username } from "./user";

/**
 * 变量名:类型
 * string
 */
let a: string = "hello";

console.log(a);

function fn1(a: number, b: number): number {
  return a + b;
}

console.log(fn1(1, 2));
console.log(username);

function f1() {
  return new Promise((resolve) => {
    resolve(111);
  });
}

function f2() {
  const res = f1();
  return res;
}

const result = f2();

console.log(result);

function getSomething() {
  var r = 0;

  setTimeout(function () {
    r = 2;

    it.next(r);
  }, 10);
}

function* compute() {
  var x: number = yield getSomething();

  console.log(x * 2);
  return x * 2;
}

var it = compute();

// it.next();
console.log(it.next());
