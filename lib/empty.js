import html from './html';

/**
 * Remove all children (including text) from an element.
 *
 * @param {Element} element The element whose children to remove.
 */
export default function empty(element) {
  html(element, '');
}
