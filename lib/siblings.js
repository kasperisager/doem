import next from './next';
import matches from './matches';

/**
 * Get all the siblings of an element, optionally filtered by a selector.
 *
 * @param {Element} element The element whose siblings to get.
 * @param {String} [selector] The selector to filter the siblings by.
 * @return {Array<Element>} The siblings of the element if found.
 */
export default function siblings(element, selector) {
  const {parentNode} = element;

  if (!parentNode) {
    throw new Error('No parent node found');
  }

  const siblings = [];
  let sibling = parentNode.firstElementChild;

  while (sibling) {
    if (sibling !== element && (!selector || matches(sibling, selector))) {
      siblings.push(sibling);
    }

    sibling = next(sibling);
  }

  return siblings;
}
