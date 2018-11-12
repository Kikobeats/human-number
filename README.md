# human-number

![Last version](https://img.shields.io/github/tag/Kikobeats/human-number.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/human-number/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/human-number)
[![Dependency status](https://img.shields.io/david/Kikobeats/human-number.svg?style=flat-square)](https://david-dm.org/Kikobeats/human-number)
[![NPM Status](https://img.shields.io/npm/dm/human-number.svg?style=flat-square)](https://www.npmjs.org/package/human-number)

> Convert number to a human readable string: `13500` → `13.5K`.

## Install

```bash
$ npm install human-number --save
```

## Usage

```js
const humanNumber = require('human-number')
humanNumber(100) // 100
humanNumber(1000) // 1K
humanNumber(1500) // 1.5K
humanNumber(10000) // 10K
humanNumber(10500) // 10.5K
humanNumber(100000) // 100K
humanNumber(100500) // 100.5K
humanNumber(1000000) // 1M
humanNumber(1500000) // 1.5M
```

You can pass a mapper as second parameter:

```js
const humanNumber = require('human-number')
humanNumber(100, n => Number.parseFloat(n).toFixed(1)) // '100.0'
```

## License

**human-number** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/Kikobeats/human-number/blob/master/LICENSE.md) License.<br>
Authored and maintained by Kiko Beats with help from [contributors](https://github.com/Kikobeats/human-number/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)
