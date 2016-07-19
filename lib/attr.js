/**
 * Get or set the value of an attribute of an element.
 *
 * @example
 * <img title="Lorem ipsum">
 * @example
 * const element = find(document, 'img');
 * attr(element, 'title');
 * // => 'Lorem ipsum'
 * attr(element, 'title', 'Dolor sit amet')
 * @example
 * <img title="Dolor sit amet">
 *
 * @param {Element} element The element whose attribute to get or set.
 * @param {string} name The name of the attribute to get or set.
 * @param {string} [value] The value of the attribute if setting.
 * @return {string} The value of the attribute if getting.
 */
export function attr(element, name, value) {
  if (value === undefined) {
    return element.getAttribute(name);
  }

  element.setAttribute(name, value);
}
