import parent from './parent';
import matches from './matches';

/**
 * Get the closest matching descendant of an element.
 *
 * @example
 * <ul class="lvl-1">
 *   <li class="item-1">Item 1
 *     <ul class="lvl-2">
 *       <li class="item-2">Item 2</li>
 *     </ul>
 *   </li>
 * </ul>
 * @example
 * const element = find(document, '.item-2');
 * closest(element, 'ul');
 * // => <ul class="lvl-2">...</ul>
 *
 * @param {Element} element The element whose descendant to get.
 * @param {string} selector The selector to match against.
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
