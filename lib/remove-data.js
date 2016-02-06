import removeAttr from './remove-attr';

/**
 * Remove a data attribute from an element.
 *
 * @param {Element} element The element whose data attribute to remove.
 * @param {string} key The key of the data attribute to remove.
 */
export default function removeData(element, key) {
  removeAttr(element, `data-${key}`);
}
