/**
 * Get the next sibling of an element.
 *
 * @example
 * <p class=foo>Lorem ipsum</p>
 * <p>Dolor sit amet</p>
 * @example
 * const element = find(document, '.foo');
 * next(element);
 * // => <p>Dolor sit amet</p>
 *
 * @param {Element} element The element whose sibling to get.
 * @return {Element} The sibling of the element if found.
 */
export default function next(element) {
  return element.nextElementSibling;
}
