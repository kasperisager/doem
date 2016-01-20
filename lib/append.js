/**
 * Insert HTML at the end of an element.
 *
 * @param {Element} element The element to insert the HTML at the end of.
 * @param {String} html The HTML to insert at the end of the element.
 */
export default function append(element, html) {
  element.insertAdjacentHTML('beforeend', html);
}
