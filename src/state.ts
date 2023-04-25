import { State, chain, evaluate } from "fp-ts/lib/State";

type Stack = number[];

const push =
  (n: number): State<Stack, undefined> =>
  (stack: Stack) =>
    [undefined, [n, ...stack]];

const pop = (): State<Stack, number | undefined> => (stack: Stack) => {
  if (stack.length === 0) {
    return [undefined, stack];
  }
  const [top, ...rest] = stack;
  return [top, rest];
};

//chain is an alias for flatMap
const program = chain(() => pop())(
  chain((result: number | undefined) => {
    console.log("The result of pop is:", result);
    return () => [undefined, [3, 4, 5]];
  })(chain(() => pop())(chain(() => push(2))(push(1))))
);

const state = program([]);
console.log("state", state);
const result = evaluate<Stack>([])(program);
console.log(result);
