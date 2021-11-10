function romanNumeralConvertor(num) {
    if(num === 4) {
        return 'IV';
    }
    
    let output = '';
    while(num > 0) {
        output += 'I';
        --num
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
});