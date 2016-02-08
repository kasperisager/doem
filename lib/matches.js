/**
 * Check if an element matches a selector.
 *
 * @param {Element} element The element to check.
 * @param {string} selector The selector to check against.
 * @return {boolean} True if the element matches the selector.
 */
export default function matches(element, selector) {
  if (!element) {
    return false;
  }

  return (element.matches || element.msMatchesSelector).call(element, selector);
}
