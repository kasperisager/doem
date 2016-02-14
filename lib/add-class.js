/**
 * Add a class to an element.
 *
 * @example
 * <p>Lorem ipsum</p>
 * @example
 * const element = find(document, 'p');
 * addClass(element, 'foo');
 * @example
 * <p class=foo>Lorem ipsum</p>
 *
 * @param {Element} element The element to add the class to.
 * @param {string} name The name of the class to add.
 */
export default function addClass(element, name) {
  element.classList.add(name);
}
