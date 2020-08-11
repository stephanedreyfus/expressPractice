// Helper functions for validation and calculation.

/**
 * Attempts to convert input values into an array.
 * @returns {Array|Error} an array of integers or an error object.
*/
const arrayValidator = vals => {
    vals = vals.split(',');
    for (let i = 0; i < vals.length; i++) {
        parsed = parseInt(vals[i]);
        if (isNaN(parsed)) return new Error(
            `The value ${vals[i]} at index ${i} is not a valid number.`
        );
        else vals[i] = parsed;
    }

    return vals;
}

const mean = vals => {
    total = 0;
    for (let i = 0; i < vals.length; i++) {
        total += vals[i];
    }

    return total / (vals.length);
}

const median = vals => {
    let sorted = vals.sort((a, b) => a - b);
    len = sorted.length
    if (len % 2 === 0) {
        return (mean([sorted[(len / 2) - 1], sorted[(len / 2)]]))
    }
    return sorted[Math.floor(len / 2)];
}

const mode = vals => {
    let sorted = vals.sort((a, b) => a - b);
    let count = {};
    let most = [[0, 0]];

    for (let i = 0; i < sorted.length; i++) {
        count[sorted[i]] = count[sorted[i]] + 1 || 1;
    }
    // In order to account for n or more equal mode values we check for equality.
    for (let key in count) {
        if (count[key] === most[0][1]) {
            most.push([key, count[key]]);
        }
        else if (count[key] > most[0][1]){
            most = [[key, count[key]]];
        }
    }

    // Make a new, sorted array of key values only.
    return most.map(set => set[0]).sort((a, b) => a - b);
}

module.exports = {
    mean,
    median,
    mode,
    arrayValidator
}