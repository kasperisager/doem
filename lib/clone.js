/**
 * Create a deep copy on an element.
 *
 * @example
 * <p>Lorem ipsum</p>
 * @example
 * const element = find(document, 'p');
 * element !== clone(element);
 * // => true
 *
 * @param {Element} element The element to copy.
 * @return {Element} The copy of the element.
 */
export function clone(element) {
  return element.cloneNode(true);
}
