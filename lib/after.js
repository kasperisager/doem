/**
 * Insert HTML after an element.
 *
 * @example
 * <p>Lorem ipsum</p>
 * @example
 * const element = find(document, 'p');
 * after(element, '<p>Dolor sit amet</p>');
 * @example
 * <p>Lorem ipsum</p><p>Dolor sit amet</p>
 *
 * @param {Element} element The element to insert the HTML after.
 * @param {string} html The HTML to insert after the element.
 */
export function after(element, html) {
  element.insertAdjacentHTML('afterend', html);
}
