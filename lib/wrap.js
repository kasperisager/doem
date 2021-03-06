import {fragment} from './fragment';

/**
 * Wrap an HTML structure around an element.
 *
 * @example
 * <p>Lorem ipsum</p>
 * @example
 * const element = find(document, 'p');
 * wrap(element, '<div></div>');
 * @example
 * <div>
 *   <p>Lorem ipsum</p>
 * </div>
 *
 * @param {Element} element The element to wrap the HTML structure around.
 * @param {string} html The HTML structure to wrap around the element.
 */
export function wrap(element, html) {
  const {firstElementChild: outer} = fragment(html);

  let inner = outer;

  while (inner.firstElementChild) {
    inner = inner.firstElementChild;
  }

  const {parentNode} = element;

  parentNode.insertBefore(outer, element);
  parentNode.removeChild(element);
  inner.appendChild(element);
}
