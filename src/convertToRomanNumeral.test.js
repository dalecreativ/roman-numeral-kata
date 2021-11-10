function romanNumeralConvertor(num) {
    let output = '';
    let lookupIndex = 0;

    const romanLookup = [
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

    it('should return "XIX" when I call the converter with 19', () => {
        expect(romanNumeralConvertor(19)).toBe('XIX');
    })

    it('should return "XX" when I call the converter with 20', () => {
        expect(romanNumeralConvertor(20)).toBe('XX');
    })

    it('should return "XXXIX" when I call the converter with 39', () => {
        expect(romanNumeralConvertor(39)).toBe('XXXIX');
    })

    it('should return "XL" when I call the converter with 40', () => {
        expect(romanNumeralConvertor(40)).toBe('XL');
    })

    it('should return "XLIX" when I call the converter with 49', () => {
        expect(romanNumeralConvertor(49)).toBe('XLIX');
    })

    it('should return "XLVII" when I call the converter with 47', () => {
        expect(romanNumeralConvertor(47)).toBe('XLVII');
    })

    it('should return "L" when I call the converter with 50', () => {
        expect(romanNumeralConvertor(50)).toBe('L');
    })

    it('should return "LX" when I call the converter with 60', () => {
        expect(romanNumeralConvertor(60)).toBe('LX');
    })

    it('should return "LXXIV" when I call the converter with 74', () => {
        expect(romanNumeralConvertor(74)).toBe('LXXIV');
    })

    it('should return "XC" when I call the converter with 90', () => {
        expect(romanNumeralConvertor(90)).toBe('XC');
    })

    it('should return "XCIX" when I call the converter with 99', () => {
        expect(romanNumeralConvertor(99)).toBe('XCIX');
    })

    it('should return "C" when I call the converter with 100', () => {
        expect(romanNumeralConvertor(100)).toBe('C');
    });

    it('should return "CXLIII" when I call the converter with 143', () => {
        expect(romanNumeralConvertor(143)).toBe('CXLIII');
    });

    it('should return "CL" when I call the converter with 150', () => {
        expect(romanNumeralConvertor(150)).toBe('CL');
    });

    it('should return "CCCLXV" when I call the converter with 365', () => {
        expect(romanNumeralConvertor(365)).toBe('CCCLXV');
    });

    it('should return "CD" when I call the converter with 400', () => {
        expect(romanNumeralConvertor(400)).toBe('CD');
    });

    it('should return "D" when I call the converter with 500', () => {
        expect(romanNumeralConvertor(500)).toBe('D');
    });

    it('should return "CM" when I call the converter with 900', () => {
        expect(romanNumeralConvertor(900)).toBe('CM');
    });

    it('should return "M" when I call the converter with 1000', () => {
        expect(romanNumeralConvertor(1000)).toBe('M');
    });
});