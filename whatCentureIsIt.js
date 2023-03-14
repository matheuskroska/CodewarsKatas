function whatCentury(year) {
  // Convert year string to number
  const yearNumber = parseInt(year);

  // Calculate century
  const century = Math.ceil(yearNumber / 100);

  // Determine suffix for century
  const suffix = getSuffix(century);

  // Return century with suffix
  return century + suffix;
}

function getSuffix(century) {
  const lastTwoDigits = century % 100;

  // Special cases for 11th, 12th, and 13th
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return "th";
  }

  // Determine suffix based on last digit
  const lastDigit = lastTwoDigits % 10;
  if (lastDigit === 1) {
    return "st";
  } else if (lastDigit === 2) {
    return "nd";
  } else if (lastDigit === 3) {
    return "rd";
  } else {
    return "th";
  }
}
