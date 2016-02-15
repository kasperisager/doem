/**
 * Remove an element from its parent.
 *
 * @example
 * <p>Lorem <b>ipsum</b></p>
 * @example
 * const element = find(document, 'b');
 * remove(element);
 * @example
 * <p>Lorem </p>
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
