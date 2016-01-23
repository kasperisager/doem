/**
 * Insert HTML at the beginnig of an element.
 *
 * @param {Element} element The element to insert the HTML at the beginning of.
 * @param {string} html The HTML to insert at the beginning of the element.
 */
export default function prepend(element, html) {
  element.insertAdjacentHTML('afterbegin', html);
}
