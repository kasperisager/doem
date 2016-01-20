import matches from './matches';

/**
 * Get the previous sibling of an element, optionally filtered by a selector.
 *
 * @param {Element} element The element whose sibling to get.
 * @param {String} [selector] The selector to filter the sibling by.
 * @return {Element} The sibling of the element if found.
 */
export default function prev(element, selector) {
  const sibling = element.previousElementSibling;

  if (!selector || matches(sibling, selector)) {
    return sibling;
  }

  return null;
}
