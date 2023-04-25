import { Option, getOrElse, flatMap, map, none, some } from "fp-ts/lib/Option";

console.log("Option");
console.log(new Array(50).fill("-").join(""));
console.log("");
console.log("Init");
console.log(new Array(50).fill("*").join(""));
const maybeValue: Option<string> = some("hello");
const maybeNothing: Option<string> = none;

console.log("maybeValue : ", maybeValue);
console.log("maybeNothing : ", maybeNothing);
console.log("");
//Map over an Option Value
console.log("Mapping");
console.log(new Array(50).fill("*").join(""));
const liftedLength = map((value: string) => value.length);
const maybeLength = liftedLength(maybeValue); // Returns some(5)
const maybeNothingLength = liftedLength(maybeNothing); // Returns none

console.log("maybeLength : ", maybeLength);
console.log("maybeNothingLength : ", maybeNothingLength);
console.log("");
//FlatMap over an Option Value
console.log("FlatMap");
console.log(new Array(50).fill("*").join(""));
const toUpper = flatMap((value: string) => some(value.toUpperCase()));
const maybeUpperCase = toUpper(maybeValue); // Returns some("HELLO")
const maybeNothingUpperCase = toUpper(maybeNothing); // Returns none

console.log("maybeUpperCase : ", maybeUpperCase);
console.log("maybeNothingUpperCase : ", maybeNothingUpperCase);
console.log("");

console.log("default values");
console.log(new Array(50).fill("*").join(""));
// Provide a default value for an Option value
const getter = getOrElse(() => "default");
const value = getter(maybeValue); // Returns "hello"
const nothingValue = getter(maybeNothing); // Returns "default"
console.log("value : ", value);
console.log("nothingValue : ", nothingValue);
console.log("");
console.log(new Array(50).fill("=").join(""));
