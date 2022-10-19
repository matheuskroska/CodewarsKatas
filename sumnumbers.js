function getSum( a,b )
{
    var min = Math.min( a, b ),
         max = Math.max( a, b );
    return (max - min + 1) * (min + max) / 2;
}

console.log(getSum(0, -1)) // -1
console.log(getSum(0,1)) // 1