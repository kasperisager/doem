/**
 * Insert HTML before an element.
 *
 * @param {Element} element The element to insert the HTML before.
 * @param {String} html The HTML to insert before the element.
 */
export default function before(element, html) {
  element.insertAdjacentHTML('beforebegin', html);
}
