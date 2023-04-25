import { IO } from "fp-ts/lib/IO";

const printToConsole =
  (message: string): IO<void> =>
  () => {
    console.log(message);
  };

const program: IO<void> = printToConsole("Hello, world!");

program();
