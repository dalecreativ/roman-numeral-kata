function romanNumeralConvertor(num) {
    if(typeof num !== "number") {
        return "Error - input invalid. The input provided is not a Number"
    }

    if(num < 1 || num > 3999) {
        return "Error - invalid range. The input provided should be between 0 and 3999"
    }

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


describe('roman numeral convertor' , () => {

    it.each(testCases)('should convert %i to %s ', (input, expected) => {
        const result =  romanNumeralConvertor(input)
        expect(result).toBe(expected)
    })
    
});