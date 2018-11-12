'use strict'

const test = require('ava')

const humanNumber = require('..')
;[
  [0, 0],
  [100, 100],
  [1000, '1K'],
  [1500, '1.5K'],
  [10000, '10K'],
  [10500, '10.5K'],
  [100000, '100K'],
  [100500, '100.5K'],
  [1000000, '1M'],
  [1500000, '1.5M']
].forEach(([input, output]) => {
  test(`${input} → ${output}`, t => t.is(humanNumber(input), output))
})

test('mapper support', t => {
  t.is(humanNumber(100, n => Number.parseFloat(n).toFixed(1)), '100.0')
})
