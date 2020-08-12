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

            expect(typeof result).toEqual("object");
            expect(result.message).toEqual("The value moo at index 1 is not a valid number.");
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

describe("median", () => {
    it("sorts an odd length array and returns the median", () => {
        expect(median([5, 8, 10, 3, 7])).toEqual(7);
        
    });
    it("sorts an even lenth array and returns the mean of the two median values", () => {
        expect(median([5, 7, 2, 9, -5, 13])).toEqual(6);
    });
});

describe("mode", () => {
    it("sorts and returns an array of the most frequent numbers", () => {
        expect(mode([6, 7, 3, 1, 1, 7, 9, 34, 1, -1])).toEqual([1]);
        expect(mode([5, 7, 1, 9, -8, 9, 2, 5])).toEqual([5, 9]);
    });
});