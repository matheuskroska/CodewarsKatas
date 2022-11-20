function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    console.log([...numbers.slice(0, indexOfMin)])
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

console.log(removeSmallest([1, 2, 3, 4, 5])) // 