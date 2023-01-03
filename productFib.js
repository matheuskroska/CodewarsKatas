function productFib(prod) {
  // Initialize the Fibonacci numbers F(0) and F(1)
  let f0 = 0;
  let f1 = 1;

  // Loop until the product of the Fibonacci numbers is greater than prod
  while (f0 * f1 < prod) {
    // Calculate the next Fibonacci number F(n+2)
    let f2 = f0 + f1;

    // Update the Fibonacci numbers
    f0 = f1;
    f1 = f2;
  }

  // Return the Fibonacci numbers and a boolean indicating whether the product is equal to prod
  return [f0, f1, f0 * f1 === prod];
}