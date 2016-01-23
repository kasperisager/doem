# Døm

> A functional DOM traversal and manipulation library for modern browsers

[![Build Status](https://travis-ci.org/kasperisager/doem.svg?branch=master)](https://travis-ci.org/kasperisager/doem) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

Døm was born out of the need of a minimal set of functional-style DOM utilities that could replace core jQuery in [modern browsers](#browser-support). It relies only on the latest native browser APIs, making the library light-weight and fast. Much inspiration was taken from [You Don't Need jQuery](https://github.com/oneuijs/You-Dont-Need-jQuery).

## Installation

Døm is fully UMD compatible and can be either [downloaded](https://github.com/kasperisager/doem/releases/latest) or installed using npm:

```sh
$ npm install --save doem
```

## Usage

```js
import {find, html, [...]} from 'doem';

const el = find(document, '.foo');
html(el, 'Hello World!');
```

## Browser support

<img width=64 src=https://raw.github.com/alrra/browser-logos/master/chrome/chrome_128x128.png> | <img width=64 src=https://raw.github.com/alrra/browser-logos/master/firefox/firefox_128x128.png> | <img width=64 src=https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_128x128.png> | <img width=64 src=https://raw.github.com/alrra/browser-logos/master/opera/opera_128x128.png> | <img width=64 src=https://raw.github.com/alrra/browser-logos/master/safari/safari_128x128.png>
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | 11+ ✔ | Latest ✔ | 6.1+ ✔ |

## License

Copyright &copy; 2016 [Kasper Kronborg Isager](https://github.com/kasperisager). Licensed under the terms of the [MIT license](LICENSE.md).
