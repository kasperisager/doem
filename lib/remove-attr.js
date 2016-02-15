/**
 * Remove an attribute from an element.
 *
 * @example
 * <img title="Lorem ipsum">
 * @example
 * const element = find(document, 'img');
 * removeAttr(element, 'title');
 * @example
 * <img>
 *
 * @param {Element} element The element whose attribute to remove.
 * @param {string} name The name of the attribute to remove.
 */
export default function removeAttr(element, name) {
  element.removeAttribute(name);
}
