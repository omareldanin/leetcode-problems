/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let result = [];
  let carry = 0;
  while (i > -1 || j > -1) {
    let n1 = i > -1 ? a[i] - "0" : 0;
    let n2 = j > -1 ? b[j] - "0" : 0;
    let sum = (n1 + n2 + carry).toString(2);
    sum = Number(sum);
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
    i--, j--;
  }
  if (carry === 1) {
    result.push("1");
  }

  return result.reverse().join("");
};