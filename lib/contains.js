/**
 * Check if an element is a descendant of another element.
 *
 * @param {Element} element The parent element to check against.
 * @param {Element} child The child element to check for.
 * @return {boolean} True if the child is a descendant of the parent.
 */
export default function contains(element, child) {
  return element !== child && element.contains(child);
}
