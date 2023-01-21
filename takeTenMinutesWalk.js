function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  return (
    walk.filter((d) => d === "n").length ===
      walk.filter((d) => d === "s").length &&
    walk.filter((d) => d === "e").length ===
      walk.filter((d) => d === "w").length
  );
}
