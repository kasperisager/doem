import next from './next';

/**
 * Get all the siblings of an element.
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
