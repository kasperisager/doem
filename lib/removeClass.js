/**
 * Remove a class from an element.
 *
 * @param {Element} element The element to remove the class from.
 * @param {String} name The name of the class to remove.
 */
export default function removeClass(element, name) {
  element.classList.remove(name);
}
