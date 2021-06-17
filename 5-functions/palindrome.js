//reverses a string
function reverse(string) {
    return Array.from(string).reverse().join("");
}

//Returns true for a palindrome, false otherwise
function palindrome(string) {
    let lowercaseString = string.toLowerCase();
    return lowercaseString === reverse(lowercaseString);
}