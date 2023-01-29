function inArray(a1, a2) {
  let r = [];
  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      if (a2[j].includes(a1[i])) {
        r.push(a1[i]);
        break;
      }
    }
  }
  return r.sort();
}
