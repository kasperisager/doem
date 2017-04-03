import {siblings} from './siblings';

/**
 * Get all the children of an element.
 *
 * @example
 * <ul>
 *   <li>Item 1</li>
 *   <li>Item 2</li>
 * </ul>
 * @example
 * const element = find(document, 'ul');
 * children(element);
 * // => [<li>Item 1</li>, <li>Item 2</li>]
 *
 * @param {Element} element The element whose children to get.
 * @return {Array<Element>} The children of the element.
 */
export function children(element) {
  const {firstElementChild} = element;

  if (!firstElementChild) {
    return [];
  }

  const s = siblings(firstElementChild);

  s.unshift(firstElementChild);

  return s;
}
