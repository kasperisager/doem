/**
 * Find all elements matching a query.
 *
 * @param {Element|Document} scope The scope to look through.
 * @param {String} query The query to use for looking up the elements.
 * @return {Array<Element>} The elements if found.
 */
export default function findAll(scope, query) {
  return Array.prototype.slice.call(scope.querySelectorAll(query));
}
