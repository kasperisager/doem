/**
 * Remove all children (including text) from an element.
 *
 * @example
 * <p>Lorem <b>ipsum</b></p>
 * @example
 * const element = find(document, 'p');
 * empty(element);
 * @example
 * <p></p>
 *
 * @param {Element} element The element whose children to remove.
 */
export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
