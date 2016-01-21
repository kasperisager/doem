import parent from './parent';

/**
 * Get all the parents of an element.
 *
 * @param {Element} element The element whose parents to get.
 * @return {Array<Element>} The parents of the element.
 */
export default function parents(element) {
  const parents = [];

  for (element = parent(element); element; element = parent(element)) {
    parents.push(element);
  }

  return parents;
}
