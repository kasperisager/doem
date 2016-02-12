/**
 * Remove an element from its parent.
 *
 * @param {Element} element The element to remove.
 */
export default function remove(element) {
  if (!element) {
    return;
  }

  const {parentNode} = element;

  if (!parentNode) {
    throw new Error('No parent node found');
  }

  parentNode.removeChild(element);
}
