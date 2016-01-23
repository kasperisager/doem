import view from './view';

/**
 * Get the current coordinates of an element relative to its document
 *
 * @param {Element} element The element whose coordinates to get.
 * @return {{top: number, left: number}} The current coordinates of the element.
 */
export default function offset(element) {
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
