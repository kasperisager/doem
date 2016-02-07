import remove from './remove';
import tag from './tag';

/**
 * Remove the parent of an element.
 *
 * @param {Element} element The element whose parent to remove.
 */
export default function unwrap(element) {
  const {parentNode: parent} = element;

  if (!parent || tag(parent) === 'body') {
    return;
  }

  const {childNodes: children, parentNode: grandParent} = parent;

  if (!grandParent) {
    return;
  }

  Array.prototype.slice.call(children).forEach(child => {
    grandParent.insertBefore(child, parent);
  });

  remove(parent);
}
