/**
 * Get the tag name of the element.
 *
 * @param {Element} element The element whose tag name to get.
 * @return {string} The tag name of the element.
 */
export default function tag(element) {
  return element.tagName.trim().toLowerCase();
}
