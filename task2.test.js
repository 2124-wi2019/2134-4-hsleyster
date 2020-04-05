//DO NOT MODIFY THE CODE BETWEEN THIS COMMENT
function calculateMyWeightOnAnotherPlanet(myWeight, otherPlanet) {
    myWeight = parseFloat(myWeight);
    if(isNaN(myWeight)) throw new Error ("Error: first argument must be a numeric value!");
    otherPlanet = otherPlanet.toUpperCase().trim();
    switch(otherPlanet) {
        case "MERCURY":
            return Number((myWeight * .38).toFixed(2));
        case "VENUS":
            return Number((myWeight * .91).toFixed(2));
        case "MARS":
            return Number((myWeight * .38).toFixed(2));
        case "JUPITER":
            return Number((myWeight * 2.34).toFixed(2));
        case "SATURN":
            return Number((myWeight * .93).toFixed(2));
        case "URANUS":
            return Number((myWeight * .92).toFixed(2));
        case "NEPTUNE":
            return Number((myWeight * 1.12).toFixed(2));
        default:
            throw new Error("Error: Valid values for second argument are Mercury, Venus, Mars, Jupiter, Saturn, Uranus, and Neptune only.");
    }
}
//AND THIS COMMENT
//WRITE YOUR TESTS BELOW
//This test is to see if the calculations for myWeight on the planet Mercury are correct.
test ("To see if the weight of 170 pounds on the planet Mercury is 64.60", () => {
    expect (calculateMyWeightOnAnotherPlanet("170", "Mercury")).toBe(64.60);
});
//This test is to see if the calculations for myWeight on the planet Venus are correct.
test ("To see if the weight of 170 pounds on the planet Venus is 154.70", () => {
    expect (calculateMyWeightOnAnotherPlanet("170", "Venus")).toBe(154.70);
});
//This test is to see if the calculations for myWeight on the planet Mars are correct.
test ("To see if the weight of 170 pounds on the planet Mars is 64.60", () => {
    expect(calculateMyWeightOnAnotherPlanet("170", "Mars")).toBe(64.60);
});
//This test is to see if the calculations for myWeight on the planet Jupiter are correct.
test ("To see if the weight of 170 pounds on the planet Jupiter is 397.80", () => {
    expect (calculateMyWeightOnAnotherPlanet("170", "Jupiter")).toBe(397.80);
});
//This test is to see if the calculations for myWeight on the planet Saturn are correct.
test ("To see if the weight of 170 pounds on the planet Saturn is 158.10", () => {
    expect (calculateMyWeightOnAnotherPlanet("170", "Saturn")).toBe(158.10);
});
//This test is to see if the calculatios for myWeight on the planet Uranus are correct.
test ("To see if the weight of 170 pounds on the planet Uranus is 156.40", () => {
    expect (calculateMyWeightOnAnotherPlanet("170", "Uranus")).toBe(156.40);
});
//This test is to see if the calculations for myWeight on the planet Neptune are correct.
test ("To see if the weight of 170 pounds on the planet Neptune is 190.40", () => {
    expect (calculateMyWeightOnAnotherPlanet("170", "Neptune")).toBe(190.40);
});
//This test is to see if there is an error thrown if an invalid value is input for otherPlanet.
test ("To see if an error is thrown if an invalid value for otherPlanet is entered", () => {
    expect ( () => {
        calculateMyWeightOnAnotherPlanet("170", "dog");
    }).toThrowError("Error: Valid values for second argument are Mercury, Venus, Mars, Jupiter, Saturn, Uranus, and Neptune only."); 
});
//This test is to see if an error is thrown if an invalid value is input for myWeight.
test ("To see if an error is thrown when an invalid value for myWeight is entered", () => {
    expect ( () => {
        calculateMyWeightOnAnotherPlanet("seventy-seven", "Mars");
    }).toThrowError("Error: first argument must be a numeric value!");
    console.log('Error: first argument must be a numeric value!');
});
/*This test is to see if a string value for myWeight and a noncapitalized otherPlanet 
is input that calculations will still be made.
*/
test ('To see if weight of "170" and planet of "neptune" is 190.40', () => {
    expect (calculateMyWeightOnAnotherPlanet("170", "neptune")).toBe(190.40);
});