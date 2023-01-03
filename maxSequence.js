function maxSequence(arr) {
  // Check if the array is empty or consists of only negative numbers
  if (arr.length === 0 || Math.max(...arr) <= 0) return 0;

  // Initialize the maximum sum to the first element of the array
  let maxSum = arr[0];

  // Initialize the current sum to the first element of the array
  let currentSum = arr[0];

  // Loop through the rest of the array
  for (let i = 1; i < arr.length; i++) {
    // Update the current sum by adding the current element to the previous current sum
    currentSum = Math.max(currentSum + arr[i], arr[i]);

    // Update the maximum sum if the current sum is larger
    maxSum = Math.max(maxSum, currentSum);
  }

  // Return the maximum sum
  return maxSum;
}