/**
 * Get or set the inner HTML of an element.
 *
 * @example
 * <p>Lorem <b>ipsum</b></p>
 * @example
 * const element = find(document, 'p');
 * html(element);
 * // => 'Lorem <b>ipsum</b>''
 * html(element, 'Dolor sit <b>amet</b>');
 * @example
 * <p>Dolor sit <b>amet</b></p>
 *
 * @param {Element} element The element whose inner HTML to get or set.
 * @param {string} content The content of the inner HTML if setting.
 * @return {string} The inner HTML of the element if getting.
 */
export function html(element, content) {
  if (content === undefined) {
    return element.innerHTML;
  }

  element.innerHTML = content;
}
