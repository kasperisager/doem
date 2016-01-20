/**
 * Insert HTML after an element.
 *
 * @param {Element} element The element to insert the HTML after.
 * @param {String} html The HTML to insert after the element.
 */
export default function after(element, html) {
  element.insertAdjacentHTML('afterend', html);
}
