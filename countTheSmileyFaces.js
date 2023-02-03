function countSmileys(arr) {
    return arr.filter(face => /^[:;][-~]?[)D]$/.test(face)).length;
}