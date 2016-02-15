import html from './html';

/**
 * Remove all children (including text) from an element.
 *
 * @example
 * <p>Lorem <b>ipsum</b></p>
 * @example
 * const element = find(document, 'p');
 * empty(element);
 * @example
 * <p></p>
 *
 * @param {Element} element The element whose children to remove.
 */
export default function empty(element) {
  html(element, '');
}
