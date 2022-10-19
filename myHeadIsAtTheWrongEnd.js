
const fixTheMeerkat = arr => arr.reverse();


console.log(fixTheMeerkat(["tail", "body", "head"])); // => ["head", "body", "tail"]
console.log(fixTheMeerkat(["tails", "body", "heads"])); // => ["heads", "body", "tails"]
console.log(fixTheMeerkat(["bottom", "middle", "top"])) // => ["top", "middle", "bottom"]
console.log(fixTheMeerkat(["lower legs", "torso", "upper legs"]))    // => ["upper legs", "torso", "lower legs"]