/**
 * Insert HTML at the beginnig of an element.
 *
 * @example
 * <p>Lorem ipsum</p>
 * @example
 * const element = find(document, 'p');
 * append(element, '<b>Dolor sit amet</b>');
 * @example
 * <p><b>Dolor sit amet</b>Lorem ipsum</p>
 *
 * @param {Element} element The element to insert the HTML at the beginning of.
 * @param {string} html The HTML to insert at the beginning of the element.
 */
export function prepend(element, html) {
  element.insertAdjacentHTML('afterbegin', html);
}
