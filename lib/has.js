import find from './find';

/**
 * Check if an element has a descendant matching a selector.
 *
 * @example
 * <div class=foo>
 *   <div class=bar></div>
 * </div>
 * @example
 * const element = find(document, '.foo');
 * has(element, '.bar');
 * // => true
 *
 * @param {Element} element The element to check.
 * @param {string} selector The selector to match against.
 * @return {boolean} True if the element has a descendant matching the selector.
 */
export default function has(element, selector) {
  if (!element) {
    return false;
  }

  return find(element, selector) !== null;
}
