import {view} from './view';

/**
 * Get the current coordinates of an element relative to its document
 *
 * @example
 * div {
 *   margin-lef: 10px;
 *   line-height: 20px;
 * }
 * @example
 * <div>Lorem ipsum</div>
 * <div class=foo>Dolor sit amet</div>
 * @example
 * const element = find(document, '.foo');
 * offset(element);
 * // => {top: 20, left: 10}
 *
 * @param {Element} element The element whose coordinates to get.
 * @return {{top: number, left: number}} The current coordinates of the element.
 */
export function offset(element) {
  const {
    pageXOffset,
    pageYOffset,
    document: {
      documentElement: {clientTop, clientLeft}
    }
  } = view(element);

  const {top, left} = element.getBoundingClientRect();

  return {
    top: top + pageYOffset - clientTop,
    left: left + pageXOffset - clientLeft
  };
}
