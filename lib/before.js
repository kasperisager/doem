/**
 * Insert HTML before an element.
 *
 * @example
 * <p>Lorem ipsum</p>
 * @example
 * const element = find(document, 'p');
 * before(element, '<p>Dolor sit amet</p>');
 * @example
 * <p>Dolor sit amet</p><p>Lorem ipsum</p>
 *
 * @param {Element} element The element to insert the HTML before.
 * @param {string} html The HTML to insert before the element.
 */
export default function before(element, html) {
  element.insertAdjacentHTML('beforebegin', html);
}
