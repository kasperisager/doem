/**
 * Get the previous sibling of an element.
 *
 * @example
 * <p>Lorem ipsum</p>
 * <p class=foo>Dolor sit amet</p>
 * @example
 * const element = find(document, '.foo');
 * prev(element);
 * // => <p>Lorem ipsum</p>
 *
 * @param {Element} element The element whose sibling to get.
 * @return {Element} The sibling of the element if found.
 */
export default function prev(element) {
  return element.previousElementSibling;
}
