/**
 * Get the parent of an element.
 *
 * @example
 * <div>
 *   <p>Lorem ipsum</p>
 * </div>
 * @example
 * const element = find(document, 'p');
 * parent(element);
 * // => <div>...</div>
 *
 * @param {Element} element The element whose parent to get.
 * @return {Element} The parent element if found.
 */
export function parent(element) {
  return element.parentElement;
}
