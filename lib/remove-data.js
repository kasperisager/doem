import removeAttr from './remove-attr';

/**
 * Remove a data attribute from an element.
 *
 * @example
 * <p data-foo=bar>Lorem ipsum</p>
 * @example
 * const element = find(document, 'p');
 * removeData(element, 'foo');
 * @example
 * <p>Lorem ipsum</p>
 *
 * @param {Element} element The element whose data attribute to remove.
 * @param {string} key The key of the data attribute to remove.
 */
export default function removeData(element, key) {
  removeAttr(element, `data-${key}`);
}
