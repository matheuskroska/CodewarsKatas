function number2words(num) {
  if (num === 0) return "zero";

  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  let words = "";
  if (num < 20) {
    words += ones[num];
  } else if (num < 100) {
    words += tens[Math.floor(num / 10)];
    if (num % 10 !== 0) {
      words += "-" + ones[num % 10];
    }
  } else if (num < 1000) {
    words += ones[Math.floor(num / 100)] + " hundred";
    if (num % 100 !== 0) {
      words += " " + number2words(num % 100);
    }
  } else if (num < 1000000) {
    words += number2words(Math.floor(num / 1000)) + " thousand";
    if (num % 1000 !== 0) {
      words += " " + number2words(num % 1000);
    }
  }

  return words;
}
