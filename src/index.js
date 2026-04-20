'use strict'

const createCompactFormatter = locale => new Intl.NumberFormat(locale, {
  notation: 'compact',
  maximumFractionDigits: 1
})

module.exports = (n, locale = 'en-US') => createCompactFormatter(locale).format(n)
