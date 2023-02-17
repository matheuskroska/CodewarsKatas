function DNAStrand(dna) {
  let complement = "";
  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case "A":
        complement += "T";
        break;
      case "T":
        complement += "A";
        break;
      case "C":
        complement += "G";
        break;
      case "G":
        complement += "C";
        break;
      default:
        throw new Error("Invalid DNA symbol: " + dna[i]);
    }
  }
  return complement;
}
