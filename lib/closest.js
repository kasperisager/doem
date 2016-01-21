import parent from './parent';
import matches from './matches';

/**
 * Get the closest matching descendant of an element.
 *
 * @param {Element} element The element whose descendant to get.
 * @param {String} selector The selector to match against.
 * @return {Element} The closest matching descendant if found.
 */
export default function closest(element, selector) {
  while (element) {
    if (matches(element, selector)) {
      return element;
    }

    element = parent(element);
  }

  return null;
}
