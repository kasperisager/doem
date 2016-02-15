/**
 * Find all elements matching a query.
 *
 * @example
 * <ul>
 *   <li>Item 1</li>
 *   <li>Item 2</li>
 * </ul>
 * @example
 * findAll(document, 'li');
 * // => [<li>Item 1</li>, <li>Item 2</li>]
 *
 * @param {Element|Document} scope The scope to look through.
 * @param {string} query The query to use for looking up the elements.
 * @return {Array<Element>} The elements if found.
 */
export default function findAll(scope, query) {
  return Array.prototype.slice.call(scope.querySelectorAll(query));
}
