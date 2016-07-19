/**
 * Check if an element has a class.
 *
 * @example
 * <p class=foo>Lorem ipsum</p>
 * @example
 * const element = find(document, 'p');
 * hasClass(element, 'foo');
 * // => true
 *
 * @param {Element} element The element to check.
 * @param {string} name The name of the class to check for.
 * @return {boolean} True if the element has the class.
 */
export function hasClass(element, name) {
  return element.classList.contains(name);
}
