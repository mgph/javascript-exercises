const fibonacci = function(count) {
    // fibonNum = parseInt(sequence);
    // if (fibonNum < 0) return "OOPS";

    // let num1 = 1, num2 = 1;
    // if (fibonNum < 3) return num1;

    // let result = 0;
    // for (let i=2; i<sequence; i++) {
    //     result = num1 + num2;
    //     num1 = num2;
    //     num2 = result;
    // }
    // return result;

    if (count < 0) return "OOPS";
    if (count === 0) return 0;

    let a = 0;
    let b = 1;
    for (let i=1; i<count; i++) {
        const tmp = b;
        b = a + b;
        a = tmp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
