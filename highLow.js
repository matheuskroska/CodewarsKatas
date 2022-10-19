function highAndLow(numbers){
    
    let arr = numbers.split(' ');
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    
    return `${max} ${min}`;
    
}




console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
highAndLow("1 2 3")