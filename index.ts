import {ProblemStatementFirst,ProblemStatementSecond} from './problemstatement';

let someVar = new ProblemStatementFirst(["This","Was","A","Simple","Example","Of","Typescript"]);
console.log("Original Array: " + someVar.displayValue());
console.log("Sorted Array: " + someVar.sortArray());
console.log("Reversed Array: " + someVar.reverseArray());

console.log("/////////////////////////////////////////////////////");

let second = new ProblemStatementSecond("Hi this is mahendra tandon.a fullstack developer.and I work in tavisca solutions.its been 4 years now.");

console.log(second.findNoOfChar('a'));
console.log(second.capitalize());