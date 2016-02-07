/**
 * Check if an element has a class.
 *
 * @param {Element} element The element to check.
 * @param {string} name The name of the class to check for.
 * @return {boolean} True if the element has the class.
 */
export default function hasClass(element, name) {
  return element.classList.contains(name);
}