function rot13(str) {
    // Create a new empty string to store the ciphered string
    let ciphered = '';

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Get the character code of the current character
        let charCode = str.charCodeAt(i);

        // Check if the character is a letter (uppercase or lowercase)
        if (charCode >= 65 && charCode <= 90) {
            // Shift the uppercase letter by 13 (wrapping around the alphabet if necessary)
            charCode = (charCode - 65 + 13) % 26 + 65;
        } else if (charCode >= 97 && charCode <= 122) {
            // Shift the lowercase letter by 13 (wrapping around the alphabet if necessary)
            charCode = (charCode - 97 + 13) % 26 + 97;
        }

        // Add the ciphered character to the ciphered string
        ciphered += String.fromCharCode(charCode);
    }

    // Return the ciphered string
    return ciphered;
    
}