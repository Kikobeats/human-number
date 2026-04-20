'use strict'

const compactFormatters = new Map()

const createCompactFormatter = locale => new Intl.NumberFormat(locale, {
  notation: 'compact',
  maximumFractionDigits: 1
})

const getCompactFormatter = locale => {
  if (!compactFormatters.has(locale)) {
    compactFormatters.set(locale, createCompactFormatter(locale))
  }

  return compactFormatters.get(locale)
}

module.exports = (n, locale = 'en-US') => getCompactFormatter(locale).format(n)
