/**
 * Insert HTML at the end of an element.
 *
 * @example
 * <p>Lorem ipsum</p>
 * @example
 * const element = find(document, 'p');
 * append(element, '<b>dolor sit amet</b>');
 * @example
 * <p>Lorem ipsum<b>dolor sit amet</b></p>
 *
 * @param {Element} element The element to insert the HTML at the end of.
 * @param {string} html The HTML to insert at the end of the element.
 */
export default function append(element, html) {
  element.insertAdjacentHTML('beforeend', html);
}
