import next from './next';

/**
 * Get all the siblings of an element.
 *
 * @example
 * <ul>
 *   <li>Item 1</li>
 *   <li class=foo>Item 2</li>
 *   <li>Item 3</li>
 * </ul>
 * @example
 * const element = find(document, '.foo');
 * siblings(element);
 * // => [<li>Item 1</li>, <li>Item 2</li>]
 *
 * @param {Element} element The element whose siblings to get.
 * @return {Array<Element>} The siblings of the element.
 */
export default function siblings(element) {
  const {parentNode} = element;

  if (!parentNode) {
    throw new Error('No parent node found');
  }

  const siblings = [];
  let sibling = parentNode.firstElementChild;

  while (sibling) {
    if (element !== sibling) {
      siblings.push(sibling);
    }

    sibling = next(sibling);
  }

  return siblings;
}
