import matches from './matches';

/**
 * Get the parent of an element, optionally filtered by a selector.
 *
 * @param {Element} element The element whose parent to get.
 * @param {String} [selector] The selector to filter the parent by.
 * @return {Element} The parent element if found.
 */
export default function parent(element, selector) {
  const {parentElement} = element;

  if (!selector || matches(parentElement, selector)) {
    return parentElement;
  }

  return null;
}
