/**
 * Find the first element matching a query.
 *
 * @param {Element|Document} scope The scope to look through.
 * @param {string} query The query to use for looking up the element.
 * @return {Element} The element if found.
 */
export default function find(scope, query) {
  return scope.querySelector(query);
}
