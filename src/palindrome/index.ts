/**
 * Write a function that checks whether a word or phrase is a palindrome. A palindrome is a
   word that is read the same from left to right as from right to left, ignoring spaces and
   differentiating between case and emergency letters.
 */

const palindrome = (value: string) => {
  const reverse = value?.split('').reverse().join('')
  return value === reverse
}

console.log(`Is madam a palindrome ? `, palindrome('madam'))
console.log(`Is car a palindrome ? `, palindrome('car'))
console.log(`Is 'eye' a palindrome ? `, palindrome('eye'))