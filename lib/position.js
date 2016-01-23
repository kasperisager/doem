/**
 * Get the current coordinates of an element relative to its offset parent.
 *
 * @param {Element} element The element whose coordinates to get.
 * @return {{top: number, left: number}} The current coordinates of the element.
 */
export default function position(element) {
  return {
    top: element.offsetTop,
    left: element.offsetLeft
  };
}
