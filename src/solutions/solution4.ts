/* Your log statement should look something like this: */
// console.log('Current color: ' + currentColor + ' | Previous Color: ' + previousColor);

let count = 1;

const timer = () => {
  console.log(`REPLACE THIS LOG MESSAGE WITH THE OUTPUT OF YOUR CODE YOUR CODE ${count}`);
  count++;
};
export const solution4 = (): void => {
  const myInterval = window.setInterval(timer, 1000);

  if (count >= 5) {
    console.log('count is greater than or equal to 5');
    window.clearInterval(myInterval);
  }
  ////////////////////
  /* YOUR CODE HERE */
  ////////////////////
};
