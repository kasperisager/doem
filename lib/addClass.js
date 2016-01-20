/**
 * Add a class to an element.
 *
 * @param {Element} element The element to add the class to.
 * @param {String} name The name of the class to add.
 */
export default function addClass(element, name) {
  element.classList.add(name);
}
