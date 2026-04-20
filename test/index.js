'use strict'

const test = require('ava')

const humanNumber = require('..')
;[
  [0, '0'],
  [10, '10'],
  [100, '100'],
  [1_000, '1K'],
  [1_500, '1.5K'],
  [10_000, '10K'],
  [10_500, '10.5K'],
  [100_000, '100K'],
  [100_500, '100.5K'],
  [1_000_000, '1M'],
  [1_500_000, '1.5M'],
  [1_000_000_000, '1B'],
  [1_500_000_000, '1.5B'],
  [1_000_000_000_000, '1T'],
  [1_500_000_000_000, '1.5T']
].forEach(([input, output]) => {
  test(`${input} → ${output}`, t => t.is(humanNumber(input), output))
})

test('compact intl support', t => {
  t.is(humanNumber(500_000), '500K')
})

test('locale override support', t => {
  t.is(humanNumber(1_500, 'es-ES'), '1,5 mil')
})
