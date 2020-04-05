//write you code between this comment
/*This is the convertToMetric function that takes two arguments. The first argument
is the value that you want to convert it converts a string to a number in case a
string numeric value is entered. The second argument is the type of conversion that you
would like to make it converts it to all capital letters in order for it to be read easier.
The switch statement checks the value of the conversionType and does the conversion math
for whichever type entered. Errors are thrown if a non numeric value is entered for the 
first argument and if incorrect string values are entered as the second argument.
*/
function convertToMetric(imperialValue, conversionType) {
    if(isNaN(imperialValue)) throw new Error("Error: The first argument must be a numeric value!");
    imperialValue = parseInt(imperialValue);
    conversionType = conversionType.toUpperCase().trim();
    switch(conversionType) {
        case "LITERS":
            return Number((imperialValue / 0.26417).toFixed(2));
        case "METERS":
            return Number((imperialValue / 3.2808).toFixed(2));
        default:
            throw new Error("Error: Second argument must be 'liters' or 'meters' only");
   }
}


//and this comment
//do not modify any code beneath this line

test("Let's convert 10 gallons to liters", ()=> {
    expect(convertToMetric(10, "liters")).toBe(37.85);
});
test ("Let's convert 10 feet to meters", ()=>{
    expect(convertToMetric(10, "meters")).toBe(3.05);

});
test("Let's make sure we get an error if we pass a value other than a number in as the first argument", ()=> {
    expect(()=> {
        convertToMetric("Test", "Meters");
    }).toThrowError("Error: The first argument must be a numeric value!");
});
test("Let's make sure we get an error if we pass a value other than 'liters' or 'meters' as the second argument", ()=>{
    expect(()=> {
        convertToMetric(43, "test");
    }).toThrowError("Error: Second argument must be 'liters' or 'meters' only");
});
test("Let's make sure our conversion works if we input a string containing a number as the first argument", ()=>{
    expect(convertToMetric("10", "meters")).toBe(3.05);
});