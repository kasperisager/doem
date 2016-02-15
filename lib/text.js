/**
 * Get or set the text content of an element.
 *
 * @example
 * <p>Lorem <b>ipsum</b></p>
 * @example
 * const element = find(document, 'p');
 * text(element);
 * // => 'Lorem ipsum'
 * text(element, 'Lorem ipsum');
 * @example
 * <p>Lorem ipsum</p>
 *
 * @param {Element} element The element whose text content to get or set.
 * @param {string} [content] The text content if setting.
 * @return {string} The text content if getting.
 */
export default function text(element, content) {
  if (content === undefined) {
    return element.textContent;
  }

  element.textContent = content;
}
