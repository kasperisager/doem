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

[lib/addClass.js:7-9](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/addClass.js#L7-L9 "Source code on GitHub")

Add a class to an element.

**Parameters**

-   `element` **Element** The element to add the class to.
-   `name` **string** The name of the class to add.

### after

[lib/after.js:7-9](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/after.js#L7-L9 "Source code on GitHub")

Insert HTML after an element.

**Parameters**

-   `element` **Element** The element to insert the HTML after.
-   `html` **string** The HTML to insert after the element.

### append

[lib/append.js:7-9](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/append.js#L7-L9 "Source code on GitHub")

Insert HTML at the end of an element.

**Parameters**

-   `element` **Element** The element to insert the HTML at the end of.
-   `html` **string** The HTML to insert at the end of the element.

### attr

[lib/attr.js:9-38](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/attr.js#L9-L38 "Source code on GitHub")

Get or set the value of an attribute of an element.

**Parameters**

-   `element` **Element** The element whose attribute to get or set.
-   `name` **string** The name of the attribute to get or set.
-   `value` **[Any]** The value of the attribute if setting.

Returns **Any** The value of the attribute if getting.

### before

[lib/before.js:7-9](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/before.js#L7-L9 "Source code on GitHub")

Insert HTML before an element.

**Parameters**

-   `element` **Element** The element to insert the HTML before.
-   `html` **string** The HTML to insert before the element.

### children

[lib/children.js:9-21](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/children.js#L9-L21 "Source code on GitHub")

Get all the children of an element.

**Parameters**

-   `element` **Element** The element whose children to get.

Returns **Array&lt;Element&gt;** The children of the element.

### clone

[lib/clone.js:7-9](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/clone.js#L7-L9 "Source code on GitHub")

Create a deep copy on an element.

**Parameters**

-   `element` **Element** The element to copy.

Returns **Element** The copy of the element.

### closest

[lib/closest.js:11-21](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/closest.js#L11-L21 "Source code on GitHub")

Get the closest matching descendant of an element.

**Parameters**

-   `element` **Element** The element whose descendant to get.
-   `selector` **string** The selector to match against.

Returns **Element** The closest matching descendant if found.

### contains

[lib/contains.js:8-10](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/contains.js#L8-L10 "Source code on GitHub")

Check if an element is a descendant of another element.

**Parameters**

-   `element` **Element** The parent element to check against.
-   `child` **Element** The child element to check for.

Returns **boolean** True if the child is a descendant of the parent.

### css

[lib/css.js:11-17](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/css.js#L11-L17 "Source code on GitHub")

Get or set the value of a CSS property of an element.

**Parameters**

-   `element` **Element** The element whose CSS property to get or set.
-   `property` **string** The CSS property to get or set.
-   `value` **[Any]** The value of the CSS property if setting.

Returns **Any** The value of the CSS property if getting.

### data

[lib/data.js:9-17](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/data.js#L9-L17 "Source code on GitHub")

Get or set the value of a data attribute of an element.

**Parameters**

-   `element` **Element** The element whose data attribute to get or set.
-   `key` **string** The key of the data attribute to get or set.
-   `value` **[Any]** The value of the data attribute if setting.

Returns **Any** The value of the data attribute if getting.

### empty

[lib/empty.js:8-10](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/empty.js#L8-L10 "Source code on GitHub")

Remove all children (including text) from an element.

**Parameters**

-   `element` **Element** The element whose children to remove.

### find

[lib/find.js:8-10](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/find.js#L8-L10 "Source code on GitHub")

Find the first element matching a query.

**Parameters**

-   `scope` **Element or Document** The scope to look through.
-   `query` **string** The query to use for looking up the element.

Returns **Element** The element if found.

### findAll

[lib/findAll.js:8-10](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/findAll.js#L8-L10 "Source code on GitHub")

Find all elements matching a query.

**Parameters**

-   `scope` **Element or Document** The scope to look through.
-   `query` **string** The query to use for looking up the elements.

Returns **Array&lt;Element&gt;** The elements if found.

### hasClass

[lib/hasClass.js:8-10](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/hasClass.js#L8-L10 "Source code on GitHub")

Check if an element has a class.

**Parameters**

-   `element` **Element** The element to check.
-   `name` **string** The name of the class to check for.

Returns **boolean** True if the element has the class.

### height

[lib/height.js:7-19](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/height.js#L7-L19 "Source code on GitHub")

Get the computed height of a node.

**Parameters**

-   `node` **Element or Document or Window** The node whose computed height to get.

Returns **number** The computed height of the node.

### html

[lib/html.js:8-14](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/html.js#L8-L14 "Source code on GitHub")

Get or set the inner HTML of an element.

**Parameters**

-   `element` **Element** The element whose inner HTML to get or set.
-   `content` **string** The content of the inner HTML if setting.

Returns **string** The inner HTML of the element if getting.

### matches

[lib/matches.js:8-16](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/matches.js#L8-L16 "Source code on GitHub")

Check if an element matches a selector.

**Parameters**

-   `element` **Element** The element to check.
-   `selector` **string** The selector to check against.

Returns **boolean** True if the element matches the selector.

### next

[lib/next.js:7-9](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/next.js#L7-L9 "Source code on GitHub")

Get the next sibling of an element.

**Parameters**

-   `element` **Element** The element whose sibling to get.

Returns **Element** The sibling of the element if found.

### offset

[lib/offset.js:9-24](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/offset.js#L9-L24 "Source code on GitHub")

Get the current coordinates of an element relative to its document

**Parameters**

-   `element` **Element** The element whose coordinates to get.

Returns **** The current coordinates of the element.

### parent

[lib/parent.js:7-9](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/parent.js#L7-L9 "Source code on GitHub")

Get the parent of an element.

**Parameters**

-   `element` **Element** The element whose parent to get.

Returns **Element** The parent element if found.

### parents

[lib/parents.js:9-17](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/parents.js#L9-L17 "Source code on GitHub")

Get all the parents of an element.

**Parameters**

-   `element` **Element** The element whose parents to get.

Returns **Array&lt;Element&gt;** The parents of the element.

### position

[lib/position.js:7-12](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/position.js#L7-L12 "Source code on GitHub")

Get the current coordinates of an element relative to its offset parent.

**Parameters**

-   `element` **Element** The element whose coordinates to get.

Returns **** The current coordinates of the element.

### prepend

[lib/prepend.js:7-9](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/prepend.js#L7-L9 "Source code on GitHub")

Insert HTML at the beginnig of an element.

**Parameters**

-   `element` **Element** The element to insert the HTML at the beginning of.
-   `html` **string** The HTML to insert at the beginning of the element.

### prev

[lib/prev.js:7-9](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/prev.js#L7-L9 "Source code on GitHub")

Get the previous sibling of an element.

**Parameters**

-   `element` **Element** The element whose sibling to get.

Returns **Element** The sibling of the element if found.

### remove

[lib/remove.js:6-14](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/remove.js#L6-L14 "Source code on GitHub")

Remove an element from its parent.

**Parameters**

-   `element` **Element** The element to remove.

### removeClass

[lib/removeClass.js:7-9](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/removeClass.js#L7-L9 "Source code on GitHub")

Remove a class from an element.

**Parameters**

-   `element` **Element** The element to remove the class from.
-   `name` **string** The name of the class to remove.

### siblings

[lib/siblings.js:9-28](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/siblings.js#L9-L28 "Source code on GitHub")

Get all the siblings of an element.

**Parameters**

-   `element` **Element** The element whose siblings to get.

Returns **Array&lt;Element&gt;** The siblings of the element.

### style

[lib/style.js:9-11](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/style.js#L9-L11 "Source code on GitHub")

Get the computed style of an element.

**Parameters**

-   `element` **Element** The element whose computed style to get.

Returns **CSSStyleDeclaration** The computed style of the element.

### tag

[lib/tag.js:7-9](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/tag.js#L7-L9 "Source code on GitHub")

Get the tag name of the element.

**Parameters**

-   `element` **Element** The element whose tag name to get.

Returns **string** The tag name of the element.

### text

[lib/text.js:7-9](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/text.js#L7-L9 "Source code on GitHub")

Get the text content of an element.

**Parameters**

-   `element` **Element** The element whose text content to get.

Returns **string** The text content of the element.

### toggleClass

[lib/toggleClass.js:7-9](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/toggleClass.js#L7-L9 "Source code on GitHub")

Toggle a class on an element.

**Parameters**

-   `element` **Element** The element to toggle the class on.
-   `name` **string** The name of the class to toggle.

### width

[lib/width.js:7-19](https://github.com/kasperisager/doem/blob/febe68f0432ff68397e5ac665968b30faa44ba1d/lib/width.js#L7-L19 "Source code on GitHub")

Get the computed width of a node.

**Parameters**

-   `node` **Element or Document or Window** The node whose computed width to get.

Returns **number** The computed width of the node.

## Browser support

<img alt=Chrome width=64 src=https://raw.github.com/alrra/browser-logos/master/chrome/chrome_128x128.png> | <img alt=Firefox width=64 src=https://raw.github.com/alrra/browser-logos/master/firefox/firefox_128x128.png> | <img alt=IE width=64 src=https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_128x128.png> | <img alt=Opera width=64 src=https://raw.github.com/alrra/browser-logos/master/opera/opera_128x128.png> | <img alt=Safari width=64 src=https://raw.github.com/alrra/browser-logos/master/safari/safari_128x128.png>
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | 11+ ✔ | Latest ✔ | 6.1+ ✔ |

## License

Copyright &copy; 2016 [Kasper Kronborg Isager](https://github.com/kasperisager). Licensed under the terms of the [MIT license](LICENSE.md).
