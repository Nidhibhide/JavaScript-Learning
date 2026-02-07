//How JS executes code and their steps to execute ( Global execution context )
//1.memory creation phase
//2.code execution phase



// | Type                 | Creation Phase       | Execution Before Declaration |
// | -------------------- | -------------------- | ---------------------------- |
// | var variable         | undefined            | Allowed                      |
// | let / const variable | TDZ                  | Error                        |
// | function declaration | Full function stored | Allowed                      |
// | function expression  | undefined            | Error                        |
// | arrow function       | TDZ                  | Error                        |
