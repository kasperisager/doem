# Døm

> A functional DOM traversal and manipulation library for modern browsers

[![Build Status](https://travis-ci.org/kasperisager/doem.svg?branch=master)](https://travis-ci.org/kasperisager/doem) [![Inline docs](http://inch-ci.org/github/kasperisager/doem.svg?branch=master)](http://inch-ci.org/github/kasperisager/doem)

Døm was born out of the need of a minimal set of functional-style DOM utilities that could replace core jQuery in [modern browsers](#browser-support). It relies only on the latest native browser APIs, making the library light-weight and fast. Much inspiration was taken from [You Don't Need jQuery](https://github.com/oneuijs/You-Dont-Need-jQuery).

## Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Browser support](#browser-support)
- [License](#license)

## Installation

```sh
$ npm install --save doem
```

## Usage

```js
import {find, html, [...]} from 'doem';

const el = find(document, '.foo');
html(el, 'Hello World!');
```

## API

### addClass

Add a class to an element.

**Parameters**

-   `element` **Element** The element to add the class to.
-   `name` **string** The name of the class to add.

### after

Insert HTML after an element.

**Parameters**

-   `element` **Element** The element to insert the HTML after.
-   `html` **string** The HTML to insert after the element.

### append

Insert HTML at the end of an element.

**Parameters**

-   `element` **Element** The element to insert the HTML at the end of.
-   `html` **string** The HTML to insert at the end of the element.

### attr

Get or set the value of an attribute of an element.

**Parameters**

-   `element` **Element** The element whose attribute to get or set.
-   `name` **string** The name of the attribute to get or set.
-   `value` **[string]** The value of the attribute if setting.

Returns **string** The value of the attribute if getting.

### before

Insert HTML before an element.

**Parameters**

-   `element` **Element** The element to insert the HTML before.
-   `html` **string** The HTML to insert before the element.

### children

Get all the children of an element.

**Parameters**

-   `element` **Element** The element whose children to get.

Returns **Array&lt;Element&gt;** The children of the element.

### clone

Create a deep copy on an element.

**Parameters**

-   `element` **Element** The element to copy.

Returns **Element** The copy of the element.

### closest

Get the closest matching descendant of an element.

**Parameters**

-   `element` **Element** The element whose descendant to get.
-   `selector` **string** The selector to match against.

Returns **Element** The closest matching descendant if found.

### contains

Check if an element is a descendant of another element.

**Parameters**

-   `element` **Element** The parent element to check against.
-   `child` **Element** The child element to check for.

Returns **boolean** True if the child is a descendant of the parent.

### css

Get or set the value of a CSS property of an element.

**Parameters**

-   `element` **Element** The element whose CSS property to get or set.
-   `property` **string** The CSS property to get or set.
-   `value` **[Any]** The value of the CSS property if setting.

Returns **Any** The value of the CSS property if getting.

### data

Get or set the value of a data attribute of an element.

**Parameters**

-   `element` **Element** The element whose data attribute to get or set.
-   `key` **string** The key of the data attribute to get or set.
-   `value` **[string]** The value of the data attribute if setting.

Returns **string** The value of the data attribute if getting.

### empty

Remove all children (including text) from an element.

**Parameters**

-   `element` **Element** The element whose children to remove.

### find

Find the first element matching a query.

**Parameters**

-   `scope` **Element or Document** The scope to look through.
-   `query` **string** The query to use for looking up the element.

Returns **Element** The element if found.

### findAll

Find all elements matching a query.

**Parameters**

-   `scope` **Element or Document** The scope to look through.
-   `query` **string** The query to use for looking up the elements.

Returns **Array&lt;Element&gt;** The elements if found.

### has

Check if an element has a descendant matching a selector.

**Parameters**

-   `element` **Element** The element to check.
-   `selector` **string** The selector to match against.

Returns **Boolean** True if the element has a descendant matching the selector.

### hasClass

Check if an element has a class.

**Parameters**

-   `element` **Element** The element to check.
-   `name` **string** The name of the class to check for.

Returns **boolean** True if the element has the class.

### height

Get the computed height of a node.

**Parameters**

-   `node` **Element or Document or Window** The node whose computed height to get.

Returns **number** The computed height of the node.

### html

Get or set the inner HTML of an element.

**Parameters**

-   `element` **Element** The element whose inner HTML to get or set.
-   `content` **string** The content of the inner HTML if setting.

Returns **string** The inner HTML of the element if getting.

### matches

Check if an element matches a selector.

**Parameters**

-   `element` **Element** The element to check.
-   `selector` **string** The selector to check against.

Returns **boolean** True if the element matches the selector.

### next

Get the next sibling of an element.

**Parameters**

-   `element` **Element** The element whose sibling to get.

Returns **Element** The sibling of the element if found.

### offset

Get the current coordinates of an element relative to its document

**Parameters**

-   `element` **Element** The element whose coordinates to get.

Returns **** The current coordinates of the element.

### parent

Get the parent of an element.

**Parameters**

-   `element` **Element** The element whose parent to get.

Returns **Element** The parent element if found.

### parents

Get all the parents of an element.

**Parameters**

-   `element` **Element** The element whose parents to get.

Returns **Array&lt;Element&gt;** The parents of the element.

### position

Get the current coordinates of an element relative to its offset parent.

**Parameters**

-   `element` **Element** The element whose coordinates to get.

Returns **** The current coordinates of the element.

### prepend

Insert HTML at the beginnig of an element.

**Parameters**

-   `element` **Element** The element to insert the HTML at the beginning of.
-   `html` **string** The HTML to insert at the beginning of the element.

### prev

Get the previous sibling of an element.

**Parameters**

-   `element` **Element** The element whose sibling to get.

Returns **Element** The sibling of the element if found.

### remove

Remove an element from its parent.

**Parameters**

-   `element` **Element** The element to remove.

### removeAttr

Remove an attribute from an element.

**Parameters**

-   `element` **Element** The element whose attribute to remove.
-   `name` **string** The name of the attribute to remove.

### removeClass

Remove a class from an element.

**Parameters**

-   `element` **Element** The element to remove the class from.
-   `name` **string** The name of the class to remove.

### siblings

Get all the siblings of an element.

**Parameters**

-   `element` **Element** The element whose siblings to get.

Returns **Array&lt;Element&gt;** The siblings of the element.

### style

Get the computed style of an element.

**Parameters**

-   `element` **Element** The element whose computed style to get.

Returns **CSSStyleDeclaration** The computed style of the element.

### tag

Get the tag name of the element.

**Parameters**

-   `element` **Element** The element whose tag name to get.

Returns **string** The tag name of the element.

### text

Get or set the text content of an element.

**Parameters**

-   `element` **Element** The element whose text content to get or set.
-   `content` **[string]** The text content if setting.

Returns **string** The text content if getting.

### toggleClass

Toggle a class on an element.

**Parameters**

-   `element` **Element** The element to toggle the class on.
-   `name` **string** The name of the class to toggle.

### width

Get the computed width of a node.

**Parameters**

-   `node` **Element or Document or Window** The node whose computed width to get.

Returns **number** The computed width of the node.

## Browser support

<img alt=Chrome width=64 src=https://raw.github.com/alrra/browser-logos/master/chrome/chrome_128x128.png> | <img alt=Firefox width=64 src=https://raw.github.com/alrra/browser-logos/master/firefox/firefox_128x128.png> | <img alt=IE width=64 src=https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_128x128.png> | <img alt=Opera width=64 src=https://raw.github.com/alrra/browser-logos/master/opera/opera_128x128.png> | <img alt=Safari width=64 src=https://raw.github.com/alrra/browser-logos/master/safari/safari_128x128.png>
:---: | :---: | :---: | :---: | :---:
Latest ✔ | Latest ✔ | 11+ ✔ | Latest ✔ | 6.1+ ✔

## License

Copyright &copy; 2016 [Kasper Kronborg Isager](https://github.com/kasperisager). Licensed under the terms of the [MIT license](LICENSE.md).
