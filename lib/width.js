/**
 * Get the computed width of a node.
 *
 * @param {Element|Document|Window} node The node whose computed width to get.
 * @return {Number} The computed width of the node.
 */
export default function width(node) {
  if (node === node.window) {
    return node.document.documentElement.clientWidth;
  }

  const {DOCUMENT_NODE} = node;

  if (node.nodeType === DOCUMENT_NODE) {
    return node.documentElement.scrollWidth;
  }

  return node.clientWidth;
}
