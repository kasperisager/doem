/**
 * Get the current coordinates of an element relative to its offset parent.
 *
 * @example
 * div {
 *   padding: 20px 10px;
 * }
 * @example
 * <div>
 *   <span>Lorem ipsum</span>
 * </div>
 * @example
 * const element = find(document, 'span');
 * position(element);
 * // => {top: 20, left: 10}
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
