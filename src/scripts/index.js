import "../styles/index.scss";

console.log("webpack starterkit");

let [a, b] = [1, 2];
console.assert(a === 1, "array destructuring did not work");
console.assert(b === 2, "array destructuring did not work");

let { c, d } = { c: 10, d: "Car" };
console.assert(c === 10, "object destructuring did not work");
console.assert(d === "Car", "object destructuring did not work");

let e, f;
({ f, e } = { e: 100, f: "Justin" });
console.assert(e === 100, "object destructuring after let did not work");
console.assert(f === "Justin", "object destructuring after let did not work");

const restFunc = (...a) => {
  console.assert(a[0] === 1, "rest func broken");
  console.assert(a[1] === 2, "rest func broken");
  console.assert(a[2] === 3, "rest func broken");
};
restFunc(1, 2, 3);

// arrays are iterable
const spread1 = (a, b, c) => {
  console.assert(a === 5, "spread1 error");
  console.assert(b === 6, "spread1 error");
  console.assert(c === 7, "spread1 error");
};
let spread1array = [5, 6, 7];
spread1(...spread1array);

// Strings are also iterable
const spread2 = (a, b, c) => {
  console.assert(a === "a", "spread2 error");
  console.assert(b === "b", "spread2 error");
  console.assert(c === "c", "spread2 error");
};
let spread2array = "abc";
spread2(...spread2array);

// typeof
console.assert(typeof 1 == "number", "typeof error");
console.assert(typeof true === "boolean", "typeof error");
console.assert(typeof "Hello" === "string", "typeof error");
console.assert(typeof function () {} === "function", "typeof error");
console.assert(typeof {} === "object", "typeof error");
console.assert(typeof null === "object", "typeof error");
console.assert(typeof NaN === "number", "typeof error");

// type conversions
console.assert(Number.parseFloat("55.55") === 55.55, "type conversion error");
console.assert(Number.parseInt("55") === 55, "type conversion error");
console.assert(Number.parseInt("55.644") === 55, "type conversion error");
console.assert(Number.isNaN(Number.parseInt("a")), "type conversion error");
