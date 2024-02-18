const sentence = "hello there from lighthouse labs";
let milliseconds = 0; // a variable to be able to increment the time delay

for (const char of sentence) {
  milliseconds += 50; // adds 50 milliseconds each time the loop is ran
  setTimeout(() => {
    process.stdout.write(char); // prints out each charachter os string according to how many milliseconds are in the variable milliseconds
  }, milliseconds);
}
setTimeout(() => {
  process.stdout.write("\n"); // creates a new line 50 miliseconds after we have completed the for loop so that the next prompt is on a new line
}, milliseconds + 50);
