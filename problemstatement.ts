let ProblemStatementFirst = class ProblemStatementFirst {

    constructor(private originalArray :string[] ){}
    
    displayValue():string[] {
        return this.originalArray.slice(0);
    }

    sortArray():string[] {
        if (this.originalArray.length){
            return this.originalArray.sort((a:string,b:string) => a.length-b.length);
        }
        return [];
    }

    reverseArray():string[] {
        if (this.originalArray.length) {
            return this.originalArray.reverse();
        }
        return [];
    }

}

let ProblemStatementSecond = class ProblemStatementSecond{
    constructor(private OriginalString:string[100]) {}

    findNoOfChar(char:string):string {
        let count:number = 0;
        if (char) {
            for (let looping of this.OriginalString.split('')) {
                if (looping == char){
                    count+=1;
                } 
            }
            return `Total number of character ${char} is : ${count}`;
        }
        
        return "Empty String";
    }

    capitalize():string {
        let count:number = 0;
        let returnString:string = "";
        let tempArray:string[] = [];
        if (this.OriginalString) {
            let arr = this.OriginalString.split('.');
            for (const sentence of arr) {
                tempArray.push(sentence.trim().charAt(0).toUpperCase() + sentence.trim().slice(1));
            }
            return tempArray.join(". ");
        }
        
        return tempArray.join();
    }
}

export {ProblemStatementFirst, ProblemStatementSecond}
