/**
 * draw a piramid using user input
 * the programme should ask user how many rows to draw
 * the piramid should be an isoscale triangle
 */

const piramid = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readline.question('How many rows? ', rows => {
        let piramid = '';
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < rows - i; j++) {
                piramid += ' ';
            }
            for (let k = 0; k <= i; k++) {
                piramid += '* ';
            }
            piramid += '\n';
        }
        console.log(piramid);
        readline.close();
    });
}

piramid();