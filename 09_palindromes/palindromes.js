const palindromes = function (s) {
  const cleanString = s
    .toLowerCase()
    .split('')
    .filter(x => isAlphaNumerical(x))
    .join('');
    
    const reversed = cleanString.split('').reverse().join('');

  return cleanString === reversed;
};

const isAlphaNumerical = function (c) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
  return alphanumerical.includes(c);
}

// Do not edit below this line
module.exports = palindromes;
