const {
    arrayValidator,
    median,
    mode,
    mean,
} = require("./helpers");

describe("#arrayValidator", () => {
    it(`takes in a string of comma-separated numbers and outputs
        an array of integers`, () => {
        expect(arrayValidator("4,5,6")).toEqual([4, 5, 6]);
    });
    it(`takes in a string with one or more non number values and
        returns an error`, () => {
            const result = arrayValidator("1,moo,10");

            expect(typeof result).toEqual(Error);
            expect(result.message).toEqual("The value moo at index 1 is not a valid number.");
            expect(result.status).toEqual(500);
        });
});

describe("mean", () => {
    it("returns the mean of an array of integers", () => {
        expect(mean([1, -1, 4, 2])).toEqual(1.5);
    });
    it("returns 0 for an empty array", () => {
        expect(mean([])).toEqual(0);
    })
});