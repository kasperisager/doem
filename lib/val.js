/**
 * Get or set the value of an element.
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
