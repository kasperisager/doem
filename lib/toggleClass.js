/**
 * Toggle a class on an element.
 *
 * @param {Element} element The element to toggle the class on.
 * @param {String} name The name of the class to toggle.
 */
export default function toggleClass(element, name) {
  element.classList.toggle(name);
}
