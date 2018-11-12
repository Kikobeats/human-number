'use strict'

const ALPHABET = 'KMGTPEZY'.split('')
const TRESHOLD = 1e3

module.exports = function (n, fn) {
  n = Math.abs(n)
  var index = 0
  while (n >= TRESHOLD && ++index < ALPHABET.length) { n /= TRESHOLD }
  if (fn) n = fn(n)
  return index === 0 ? n : n + ALPHABET[index - 1]
}
