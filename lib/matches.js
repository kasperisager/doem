/**
 * Check if an element matches a selector.
 *
 * @param {Element} element The element to check.
 * @param {string} selector The selector to check against.
 * @return {Boolean} True if the element matches the selector.
 */
export default function matches(element, selector) {
  const matches =
    element.matches ||
    element.webkitMatchesSelector ||
    element.mozMatchesSelector ||
    element.msMatchesSelector;

  return matches.call(element, selector);
}
