import fragment from './fragment';

/**
 * Replace an element with HTML.
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
