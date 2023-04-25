import { Either, left, map, right } from "fp-ts/lib/Either";

console.log("Either");
console.log(new Array(50).fill("-").join(""));
console.log("");

console.log("divide");
console.log(new Array(50).fill("*").join(""));

const divide = (a: number, b: number): Either<string, number> =>
  b === 0 ? left("Cannot divide by zero") : right(a / b);

const result1 = divide(10, 2); // Returns Right(5)
const result2 = divide(10, 0); // Returns Left('Cannot divide by zero')

console.log("result1 :", result1);
console.log("result2 :", result2);
console.log("");

console.log("Mapping");
console.log(new Array(50).fill("*").join(""));
const greaterThanTen = map((value: number) => value > 10);
const result3 = greaterThanTen(result1); // Right (false)
const result4 = greaterThanTen(result2); // Returns  Left('Cannot divide by zero')

console.log("result3 :", result3);
console.log("result4 :", result4);
console.log("");
console.log(new Array(50).fill("=").join(""));
