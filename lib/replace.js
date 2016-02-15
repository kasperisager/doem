import fragment from './fragment';

/**
 * Replace an element with HTML.
 *
 * @example
 * <p>Lorem <b>ipsum<b></p>
 * @example
 * const element = find(document, 'b');
 * replace(element, '<i>ipsum</i>');
 * @example
 * <p>Lorem <i>ipsum<i></p>
 *
 * @param {Element} element The element to replace with HTML.
 * @param {string} html The HTML to replace the element with.
 */
export default function replace(element, html) {
  const {parentNode} = element;

  if (!parentNode) {
    throw new Error('No parent node found');
  }

  parentNode.replaceChild(fragment(html), element);
}
