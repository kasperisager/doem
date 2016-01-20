/**
 * Create a deep copy on an element.
 *
 * @param {Element} element The element to copy.
 * @return {Element} The copy of the element.
 */
export default function clone(element) {
  return element.cloneNode(true);
}
