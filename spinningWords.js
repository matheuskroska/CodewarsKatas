function spinWords(string){
    var stringArray = string.split(" ");
    var newArray = [];
    for (var i = 0; i < stringArray.length; i++) {
        if (stringArray[i].length >= 5) {
            newArray.push(stringArray[i].split("").reverse().join(""));
        } else {
            newArray.push(stringArray[i]);
        }
    }
    return newArray.join(" ");
}

console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));