/**
 * Get a reference to the view (window) that a node is contained within.
 *
 * @param {Element|Document|Window} node The node whose view to get.
 * @return {Window} The view that the node is contained within.
 * @private
 */
export function view(node) {
  if (node === node.window) {
    return node;
  }

  const {DOCUMENT_NODE} = node;

  if (node.nodeType === DOCUMENT_NODE) {
    return document.defaultView;
  }

  return node.ownerDocument.defaultView;
}
