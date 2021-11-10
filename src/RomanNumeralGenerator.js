class RomanNumeralGenerator {
    constructor(num) {
        this.num = num;
        this.output = '';
        this.lookupIndex = 0;
        this.romanLookup = [
            {arabic: 1000, numeral: 'M'},
            {arabic: 900, numeral: 'CM'},
            {arabic: 500, numeral: 'D'},
            {arabic: 400, numeral: 'CD'},
            {arabic: 100, numeral: 'C'},
            {arabic: 90, numeral: 'XC'},
            {arabic: 50, numeral: 'L'},
            {arabic: 40, numeral: 'XL'},
            {arabic: 10, numeral: 'X'},
            {arabic: 9, numeral: 'IX'},
            {arabic: 5, numeral: 'V'},
            {arabic: 4, numeral: 'IV'},
            {arabic: 1, numeral: 'I'}
        ];
    }

    get romanNumeral() {
        if(typeof this.num !== "number") {
            return "Error - input invalid. The input provided is not a Number"
        }
    
        if(this.num < 1 || this.num > 3999) {
            return "Error - invalid range. The input provided should be between 0 and 3999"
        }
        return this.convertToNumerals();
    }

    convertToNumerals(){
        while(this.num > 0) {  
            const subtract = this.romanLookup[this.lookupIndex].arabic;
            if(subtract <= this.num) {
                this.output += this.romanLookup[this.lookupIndex].numeral;
                this.num = this.num - subtract
            } else{
                this.lookupIndex++
            }
        }
        
        return this.output;
    }

}


export default RomanNumeralGenerator;