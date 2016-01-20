/**
 * Get or set the inner HTML of an element.
 *
 * @param {Element} element The element whose inner HTML to get or set.
 * @param {String} content The content of the inner HTML if setting.
 * @return {String} The inner HTML of the element if getting.
 */
export default function html(element, content) {
  if (content === undefined) {
    return element.innerHTML;
  }

  element.innerHTML = content;
}
