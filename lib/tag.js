/**
 * Get the tag name of the element.
 *
 * @example
 * <p>Lorem ipsum</p>
 * @example
 * const element = find(document, 'p');
 * tag(element);
 * // => 'p'
 *
 * @param {Element} element The element whose tag name to get.
 * @return {string} The tag name of the element.
 */
export default function tag(element) {
  return element.tagName.trim().toLowerCase();
}
