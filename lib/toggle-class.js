/**
 * Toggle a class on an element.
 *
 * @example
 * <p>Lorem ipsum</p>
 * @example
 * const element = find(document, 'p');
 * toggleClass(element, 'foo');
 * @example
 * <p class=foo>Lorem ipsum</p>
 * @example
 * toggleClass(element, 'foo');
 * @example
 * <p>Lorem ipsum</p>
 *
 * @param {Element} element The element to toggle the class on.
 * @param {string} name The name of the class to toggle.
 */
export function toggleClass(element, name) {
  element.classList.toggle(name);
}
