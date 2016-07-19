const simple = /^([#.]?-?[a-z_]+[\w-]*|\*)$/i;
const body = /^body$/i;

/**
 * Find the first element matching a query.
 *
 * @example
 * <ul>
 *   <li>Item 1</li>
 *   <li>Item 2</li>
 * </ul>
 * @example
 * find(document, 'li');
 * // => <li>Item 1</li>
 *
 * @param {Element|Document} scope The scope to look through.
 * @param {string} query The query to use for looking up the element.
 * @return {Element} The element if found.
 */
export function find(scope, query) {
  query = query.trim();
  const {DOCUMENT_NODE} = scope;

  if (scope.nodeType === DOCUMENT_NODE && simple.test(query)) {
    const first = query[0];

    if (first === '.') {
      return scope.getElementsByClassName(query.slice(1))[0];
    } else if (first === '#') {
      return scope.getElementById(query.slice(1));
    } else if (body.test(query)) {
      return scope.body;
    }

    return scope.getElementsByTagName(query)[0];
  }

  return scope.querySelector(query);
}
