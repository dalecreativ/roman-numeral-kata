import RomanNumeralGenerator from "./RomanNumeralGenerator";

const testCases = [
    [1,"I"],
    [2,"II"],
    [3,"III"],
    [4,"IV"],
    [5,"V"],
    [9,"IX"],
    [10,"X"],
    [39,"XXXIX"],
    [40,"XL"],
    [47,"XLVII"],
    [50,"L"],
    [74,"LXXIV"],
    [90,"XC"],
    [100,"C"],
    [150,"CL"],
    [365,"CCCLXV"],
    [400,"CD"],
    [500,"D"],
    [900,"CM"],
    [1000,"M"],
    [3999, "MMMCMXCIX"],
    ["A string", "Error - input invalid. The input provided is not a Number"],
    [0, "Error - invalid range. The input provided should be between 0 and 3999"],
    [4000, "Error - invalid range. The input provided should be between 0 and 3999"]
]

describe('roman numeral convertor class implementation' , () => {

    it.each(testCases)('should convert %i to %s ', (input, expected) => {
        const result =  new RomanNumeralGenerator(input).romanNumeral
        expect(result).toBe(expected)
    })
    
});