import siblings from './siblings';

/**
 * Get all the children of an element.
 *
 * @param {Element} element The element whose children to get.
 * @return {Array<Element>} The children of the element.
 */
export default function children(element) {
  let children = [];

  const {firstElementChild} = element;

  if (!firstElementChild) {
    return children;
  }

  children.push(firstElementChild);

  return children.concat(siblings(firstElementChild));
}
