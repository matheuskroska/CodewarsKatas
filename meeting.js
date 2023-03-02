function meeting(s) {
  const guests = s
    .toUpperCase()
    .split(";")
    .map((name) => {
      const [first, last] = name.split(":");
      return `(${last}, ${first})`;
    });
  guests.sort();
  return guests.join("");
}
