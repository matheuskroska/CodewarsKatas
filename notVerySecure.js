function alphanumeric(str) {
  // Use a regular expression to check if the string contains only letters and digits
  return /^[a-zA-Z0-9]+$/.test(str);
}
