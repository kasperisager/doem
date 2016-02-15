/**
 * Get or set the value of an element.
 *
 * @example
 * <input value=foo></input>
 * @example
 * const element = find(document, 'input');
 * val(element);
 * // => 'foo'
 * val(element, 'bar');
 * @example
 * <input value=bar></input>
 *
 * @param {Element} element The element whose value to get or set.
 * @param {string} [value] The value of the element if setting.
 * @return {string} The value of the element if getting.
 */
export default function val(element, value) {
  if (value === undefined) {
    return element.value;
  }

  element.value = value;
}
