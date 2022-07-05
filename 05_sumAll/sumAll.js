const sumAll = function(num1, num2) {
    if (typeof start != "number" || typeof stop != "number") {
        return "ERROR";
    }
    if (start < 0 || stop < 0) {
        return "ERROR";
    }
    if (num1 <= num2) {
        let start = num1;
        let stop = num2;
    } else {
        let start = num2;
        let stop = num1;
    }
    let total = 0;
    for (let i=start; i<=stop; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
