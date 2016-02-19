import remove from './remove';
import tag from './tag';

/**
 * Remove the parent of an element.
 *
 * @example
 * <div>
 *   <p class=foo>Lorem ipsum</p>
 *   <p>Dolor sit amet</p>
 * </div>
 * @example
 * const element = find(document, '.foo');
 * unwrap(element);
 * @example
 * <p class=foo>Lorem ipsum</p>
 * <p>Dolor sit amet</p>
 *
 * @param {Element} element The element whose parent to remove.
 */
export default function unwrap(element) {
  const {parentNode: parent} = element;

  if (!parent || tag(parent) === 'body') {
    return;
  }

  const {parentNode: grandParent} = parent;

  if (!grandParent) {
    return;
  }

  while (parent.firstChild) {
    grandParent.insertBefore(parent.firstChild, parent);
  }

  remove(parent);
}
