// const removeFromArray = function(array, ...items) {
//     for (const item of items) {
//         for (let i=0; i<array.length; i++) {
//             if (item === array[i])
//                 delete array[i];
//         }
//     }
//     array = array.filter( (e) => e !== undefined );
//     return array;
// };

const removeFromArray = function(...args) {
    const array = args[0];
    return array.filter( val => !args.includes(val) );
};

// Do not edit below this line
module.exports = removeFromArray;
