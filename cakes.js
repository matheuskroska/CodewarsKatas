function cakes(recipe, available) {
  // initialize the max cakes variable to a large number
  let maxCakes = Number.MAX_SAFE_INTEGER;

  // iterate through the ingredients in the recipe
  for (const ingredient in recipe) {
    // if the ingredient is not available, return 0
    if (!available[ingredient]) return 0;

    // calculate the maximum number of cakes that can be baked with the available amount of this ingredient
    const cakesForIngredient = Math.floor(
      available[ingredient] / recipe[ingredient]
    );

    // update the max cakes variable with the minimum value
    maxCakes = Math.min(maxCakes, cakesForIngredient);
  }

  // return the max cakes
  return maxCakes;
}
