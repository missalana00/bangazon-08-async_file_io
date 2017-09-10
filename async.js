#!/usr/bin/env node

const fs = require('fs');
// console.log(fs); // gave us the whole node module
console.log(fs.readFile); // access the readFileSync property from the node module (fs)

// Destructured node module to pluck out the readFile method
// readFile is just the async version of reading a file (vs readFileSync)
// This method (readFile) takes a path to file and an optional argument for setting the file format, 
// just like its synchronous sibling, but it also takes a third argument of a callback 
// to run once the read operation is done.

const { readFile } = require("fs");

const argInput = process.argv[2];

if (argInput) {
    // try just means "do this code..."
    try {
        const spitItOutput = readFile(argInput, 'utf8', (error, data) => {
            console.log('data', data, error);
        });
        // The below is essentially node's console.log
        process.stdout.write(spitItOutput);
    // If there was any error in the try, catch it and log it...
    } catch(e) {
        console.log("There was an error", e)
    }
};

// To run this code: "node async.js ./things.txt"