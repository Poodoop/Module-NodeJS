var readline = require('readline')
var find = require('./find.js')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is the square's length? ", function(length) {
    rl.question("What is the square's width? ", function(width) {
        console.log("The area of the square is " + find.squareArea(length,width) + " and the circumference of the square is " + find.squareCircumference(length,width) + ".")
        rl.close()
    });
});

rl.on("close", function() {
    console.log("Program closing");
    process.exit(0);
});