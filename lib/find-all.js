const simple = /^([.]?-?[a-z_]+[\w-]*|\*)$/i;

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
  let found;

  const {DOCUMENT_NODE} = scope;

  if (scope.nodeType === DOCUMENT_NODE && simple.test(query)) {
    if (query[0] === '.') {
      found = scope.getElementsByClassName(query.slice(1));
    } else if (query.trim().toLowerCase() === 'body') {
      found = [document.body];
    } else {
      found = scope.getElementsByTagName(query);
    }
  } else {
    found = scope.querySelectorAll(query);
  }

  const array = new Array(found.length);

  for (let i = 0; i < array.length; i++) {
    array[i] = found[i];
  }

  return array;
}
