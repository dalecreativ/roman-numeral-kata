function romanNumeralConvertor(num) {
    let output = '';
    let lookupIndex = 0;

    const romanLookup = [
        {arabic: 10, numeral: 'X'},
        {arabic: 9, numeral: 'IX'},
        {arabic: 5, numeral: 'V'},
        {arabic: 4, numeral: 'IV'},
        {arabic: 1, numeral: 'I'}
    ]

    while(num > 0) {
        const subtract = romanLookup[lookupIndex].arabic;
        if(subtract <= num) {
            output += romanLookup[lookupIndex].numeral;
            num = num - subtract
        } else{
            lookupIndex++
        }
    }
    return output;

}

describe('roman numeral convertor' , () => {
    it('should return "I" when I call the convertor with 1', () => {
        expect(romanNumeralConvertor(1)).toBe('I');
    })

    it('should return "II" when I call the convertor with 2', () => {
        expect(romanNumeralConvertor(2)).toBe('II');
    })

    it('should return "III when I call the converter with 3', () => {
        expect(romanNumeralConvertor(3)).toBe('III');
    })

    it('should return "IV" when I call the converter with 4', () => {
        expect(romanNumeralConvertor(4)).toBe('IV');
    })

    it('should return "V" when I call the converter with 5', () => {
        expect(romanNumeralConvertor(5)).toBe('V');
    })

    it('should return "IX" when I call the converter with 9', () => {
        expect(romanNumeralConvertor(9)).toBe('IX');
    })

    it('should return "X" when I call the converter with 10', () => {
        expect(romanNumeralConvertor(10)).toBe('X');
    })

});