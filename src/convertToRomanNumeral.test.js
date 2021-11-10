function romanNumeralConvertor(num) {
    if(num === 2) {
        return "II"
    }
    return "I"
}

describe('roman numeral convertor' , () => {
    it('should return "I" when I call the convertor with 1', () => {
        expect(romanNumeralConvertor(1)).toBe('I');
    })

    it('should return "II" when I call the convertor with 2', () => {
        expect(romanNumeralConvertor(2)).toBe('II');
    })
});