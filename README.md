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

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element to add the class to.
-   `name` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the class to add.

**Examples**

```html
<p>Lorem ipsum</p>
```

```js
const element = find(document, 'p');
addClass(element, 'foo');
```

```html
<p class=foo>Lorem ipsum</p>
```

### after

Insert HTML after an element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element to insert the HTML after.
-   `html` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The HTML to insert after the element.

**Examples**

```html
<p>Lorem ipsum</p>
```

```js
const element = find(document, 'p');
after(element, '<p>Dolor sit amet</p>');
```

```html
<p>Lorem ipsum</p><p>Dolor sit amet</p>
```

### append

Insert HTML at the end of an element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element to insert the HTML at the end of.
-   `html` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The HTML to insert at the end of the element.

**Examples**

```html
<p>Lorem ipsum</p>
```

```js
const element = find(document, 'p');
append(element, '<b>dolor sit amet</b>');
```

```html
<p>Lorem ipsum<b>dolor sit amet</b></p>
```

### attr

Get or set the value of an attribute of an element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element whose attribute to get or set.
-   `name` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the attribute to get or set.
-   `value` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)=** The value of the attribute if setting.

**Examples**

```html
<img title="Lorem ipsum">
```

```js
const element = find(document, 'img');
attr(element, 'title');
// => "Lorem ipsum"
attr(element, 'title', 'Dolor sit amet')
```

```html
<img title="Dolor sit amet">
```

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The value of the attribute if getting.

### before

Insert HTML before an element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element to insert the HTML before.
-   `html` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The HTML to insert before the element.

**Examples**

```html
<p>Lorem ipsum</p>
```

```js
const element = find(document, 'p');
before(element, '<p>Dolor sit amet</p>');
```

```html
<p>Dolor sit amet</p><p>Lorem ipsum</p>
```

### children

Get all the children of an element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element whose children to get.

**Examples**

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

```js
const element = find(document, 'ul');
children(element);
// => [<li>Item 1</li>, <li>Item 2</li>]
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).&lt;[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)>** The children of the element.

### clone

Create a deep copy on an element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element to copy.

**Examples**

```html
<p>Lorem ipsum</p>
```

```js
const element = find(document, 'p');
element !== clone(element);
// => true
```

Returns **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The copy of the element.

### closest

Get the closest matching descendant of an element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element whose descendant to get.
-   `selector` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The selector to match against.

**Examples**

```html
<ul class="lvl-1">
  <li class="item-1">Item 1
    <ul class="lvl-2">
      <li class="item-2">Item 2</li>
    </ul>
  </li>
</ul>
```

```js
const element = find(document, '.item-2');
closest(element, 'ul');
// => <ul class="lvl-2"></ul>
```

Returns **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The closest matching descendant if found.

### contains

Check if an element is a descendant of another element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The parent element to check against.
-   `child` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The child element to check for.

**Examples**

```html
<div class=foo>
  <div class=bar></div>
</div>
```

```js
const foo = find(document, '.foo');
const bar = find(document, '.bar');
contains(foo, bar);
// => true
```

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** True if the child is a descendant of the parent.

### css

Get or set the value of a CSS property of an element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element whose CSS property to get or set.
-   `property` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The CSS property to get or set.
-   `value` **Any=** The value of the CSS property if setting.

**Examples**

```css
p {
  color: red;
}
```

```html
<p>Lorem ipsum</p>
```

```js
const element = find(document, 'p');
css(element, 'color');
// => rgb(255, 0, 0)
css(element, 'color', 'blue');
```

```html
<p style="color: blue;">Lorem ipsum</p>
```

Returns **Any** The value of the CSS property if getting.

### data

Get or set the value of a data attribute of an element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element whose data attribute to get or set.
-   `key` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The key of the data attribute to get or set.
-   `value` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)=** The value of the data attribute if setting.

**Examples**

```html
<p data-foo=bar>Lorem ipsum</p>
```

```js
const element = find(document, 'p');
data(element, 'foo');
// => 'bar'
data(element, 'foo', 'baz')
```

```html
<p data-foo=baz>Lorem ipsum</p>
```

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The value of the data attribute if getting.

### empty

Remove all children (including text) from an element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element whose children to remove.

**Examples**

```html
<p>Lorem <b>ipsum</b></p>
```

```js
const element = find(document, 'p');
empty(element);
```

```html
<p></p>
```

### find

Find the first element matching a query.

**Parameters**

-   `scope` **([Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)\|[Document](https://developer.mozilla.org/en-US/docs/Web/JavaScript))** The scope to look through.
-   `query` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The query to use for looking up the element.

Returns **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element if found.

### findAll

Find all elements matching a query.

**Parameters**

-   `scope` **([Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)\|[Document](https://developer.mozilla.org/en-US/docs/Web/JavaScript))** The scope to look through.
-   `query` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The query to use for looking up the elements.

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).&lt;[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)>** The elements if found.

### has

Check if an element has a descendant matching a selector.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element to check.
-   `selector` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The selector to match against.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** True if the element has a descendant matching the selector.

### hasClass

Check if an element has a class.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element to check.
-   `name` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the class to check for.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** True if the element has the class.

### height

Get the computed height of a node.

**Parameters**

-   `node` **([Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)\|[Document](https://developer.mozilla.org/en-US/docs/Web/JavaScript)\|[Window](https://developer.mozilla.org/en-US/docs/Web/API/Window))** The node whose computed height to get.

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** The computed height of the node.

### html

Get or set the inner HTML of an element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element whose inner HTML to get or set.
-   `content` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The content of the inner HTML if setting.

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The inner HTML of the element if getting.

### matches

Check if an element matches a selector.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element to check.
-   `selector` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The selector to check against.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** True if the element matches the selector.

### next

Get the next sibling of an element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element whose sibling to get.

Returns **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The sibling of the element if found.

### offset

Get the current coordinates of an element relative to its document

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element whose coordinates to get.

Returns **{top: [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), left: [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)}** The current coordinates of the element.

### parent

Get the parent of an element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element whose parent to get.

Returns **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The parent element if found.

### parents

Get all the parents of an element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element whose parents to get.

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).&lt;[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)>** The parents of the element.

### position

Get the current coordinates of an element relative to its offset parent.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element whose coordinates to get.

Returns **{top: [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), left: [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)}** The current coordinates of the element.

### prepend

Insert HTML at the beginnig of an element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element to insert the HTML at the beginning of.
-   `html` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The HTML to insert at the beginning of the element.

### prev

Get the previous sibling of an element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element whose sibling to get.

Returns **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The sibling of the element if found.

### remove

Remove an element from its parent.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element to remove.

### removeAttr

Remove an attribute from an element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element whose attribute to remove.
-   `name` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the attribute to remove.

### removeClass

Remove a class from an element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element to remove the class from.
-   `name` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the class to remove.

### removeData

Remove a data attribute from an element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element whose data attribute to remove.
-   `key` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The key of the data attribute to remove.

### replace

Replace an element with HTML.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element to replace with HTML.
-   `html` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The HTML to replace the element with.

### siblings

Get all the siblings of an element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element whose siblings to get.

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).&lt;[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)>** The siblings of the element.

### style

Get the computed style of an element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element whose computed style to get.

Returns **CSSStyleDeclaration** The computed style of the element.

### tag

Get the tag name of the element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element whose tag name to get.

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The tag name of the element.

### text

Get or set the text content of an element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element whose text content to get or set.
-   `content` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)=** The text content if setting.

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The text content if getting.

### toggleClass

Toggle a class on an element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element to toggle the class on.
-   `name` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the class to toggle.

### unwrap

Remove the parent of an element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element whose parent to remove.

### val

Get or set the value of an element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element whose value to get or set.
-   `value` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)=** The value of the element if setting.

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The value of the element if getting.

### width

Get the computed width of a node.

**Parameters**

-   `node` **([Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)\|[Document](https://developer.mozilla.org/en-US/docs/Web/JavaScript)\|[Window](https://developer.mozilla.org/en-US/docs/Web/API/Window))** The node whose computed width to get.

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** The computed width of the node.

### wrap

Wrap an HTML structure around an element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** The element to wrap the HTML structure around.
-   `html` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The HTML structure to wrap around the element.

## Browser support

<img alt=Chrome width=64 src=https://raw.github.com/alrra/browser-logos/master/chrome/chrome_128x128.png> | <img alt=Firefox width=64 src=https://raw.github.com/alrra/browser-logos/master/firefox/firefox_128x128.png> | <img alt=IE width=64 src=https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_128x128.png> | <img alt=Opera width=64 src=https://raw.github.com/alrra/browser-logos/master/opera/opera_128x128.png> | <img alt=Safari width=64 src=https://raw.github.com/alrra/browser-logos/master/safari/safari_128x128.png>
:---: | :---: | :---: | :---: | :---:
Latest ✔ | Latest ✔ | 11+ ✔ | Latest ✔ | 6.1+ ✔

## License

Copyright &copy; 2016 [Kasper Kronborg Isager](https://github.com/kasperisager). Licensed under the terms of the [MIT license](LICENSE.md).
