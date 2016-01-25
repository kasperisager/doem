import attr from './attr';

/**
 * Get or set the value of a data attribute of an element.
 *
 * @param {Element} element The element whose data attribute to get or set.
 * @param {string} key The key of the data attribute to get or set.
 * @param {string} [value] The value of the data attribute if setting.
 * @return {string} The value of the data attribute if getting.
 */
export default function data(element, key, value) {
  return attr(element, `data-${key}`, value);
}
