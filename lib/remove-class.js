/**
 * Remove a class from an element.
 *
 * @example
 * <p class="foo bar">Lorem ipsum</p>
 * @example
 * const element = find(document, 'p');
 * removeClass(element, 'foo');
 * @example
 * <p class=bar>Lorem ipsum</p>
 *
 * @param {Element} element The element to remove the class from.
 * @param {string} name The name of the class to remove.
 */
export function removeClass(element, name) {
  element.classList.remove(name);
}
