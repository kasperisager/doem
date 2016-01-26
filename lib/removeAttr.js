/**
 * Remove an attribute from an element.
 *
 * @param {Element} element The element whose attribute to remove.
 * @param {string} name The name of the attribute to remove.
 */
export default function removeAttr(element, name) {
  element.removeAttribute(name);
}
