function filter_list(list) {
   
    return list.filter(function (item) {
        return typeof item === 'number';
    });
    
}


console.log(filter_list([1, 2, 'a', 'b']))
console.log(filter_list([1,'a','b',0,15]))
console.log(filter_list([1,2,'aasf','1','123',123]))


