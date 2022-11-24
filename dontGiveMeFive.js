function dontGiveMeFive(start, end)
{
    var count = 0;
    for (var i = start; i <= end; i++) {
        if (i.toString().indexOf('5') == -1) {
        count++;
        }
    }
    return count;
}


console.log(dontGiveMeFive(1, 9)); // 8
console.log(dontGiveMeFive(4, 17)); // 12