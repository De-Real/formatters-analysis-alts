// Common mistakes in a JavaScript file

// 1. Unused variables
const unusedVariable = 'I am not used anywhere';

// 2. Unused function
function unusedFunction() {
    console.log('This function is not used anywhere');
}

// 3. Missing semicolons
const a = 5
const b = 10

// 4. Undefined variables
console.log(undeclaredVariable); // undeclaredVariable is not defined

// 5. Incorrect equality checks
if (a = b) { // Assignment instead of comparison
    console.log('This will always print');
}

// 6. Console logs in production code
console.log('This is a debug message');

// 7. Using var instead of let/const
var x = 1;

// 8. Inconsistent return in a function
function checkNumber(num) {
    if (num > 10) {
        return 'Greater than 10';
    } else {
        // Missing return statement
    }
}

// 9. Using == instead of ===
if (a == '5') { // Type coercion
    console.log('a is equal to 5');
}

// 10. Callback without handling error
const fs = require('fs');
fs.readFile('/some/file', (err, data) => {
    if (err) throw err; // Not recommended to throw errors in callbacks
    console.log(data);
});

// 11. Deeply nested callbacks (callback hell)
fs.readFile('/some/file1', (err, data1) => {
    if (err) throw err;
    fs.readFile('/some/file2', (err, data2) => {
        if (err) throw err;
        fs.readFile('/some/file3', (err, data3) => {
            if (err) throw err;
            console.log(data1, data2, data3);
        });
    });
});

// 12. Not using strict mode
function sloppyFunction() {
    someUndeclaredVariable = 10; // This will not be caught without 'use strict'
}
