import find from './find';

/**
 * Check if an element has a descendant matching a selector.
 *
 * @param {Element} element The element to check.
 * @param {string} selector The selector to match against.
 * @return {boolean} True if the element has a descendant matching the selector.
 */
export default function has(element, selector) {
  return find(element, selector) !== null;
}
