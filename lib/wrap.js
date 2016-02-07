import fragment from './fragment';
import remove from './remove';

/**
 * Wrap an HTML structure around an element.
 *
 * @param {Element} element The element to wrap the HTML structure around.
 * @param {string} html The HTML structure to wrap around the element.
 */
export default function wrap(element, html) {
  const {firstElementChild: outer} = fragment(html);

  let inner = outer;

  while (inner.firstElementChild) {
    inner = inner.firstElementChild;
  }

  const {parentNode} = element;

  parentNode.insertBefore(outer, element);
  remove(element);
  inner.appendChild(element);
}
