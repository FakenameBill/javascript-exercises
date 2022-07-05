const repeatString = function(str, n) {
    if (n<0) {
        return 'ERROR';
    }
    let acc = "";
    for (let i=0; i<n; i++) {
        acc=acc.concat(str);
    }
    return acc;
};

// Do not edit below this line
module.exports = repeatString;
