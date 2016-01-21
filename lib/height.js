/**
 * Get the computed height of a node.
 *
 * @param {Element|Document|Window} node The node whose computed height to get.
 * @return {Number} The computed height of the node.
 */
export default function height(node) {
  if (node === node.window) {
    return node.document.documentElement.clientHeight;
  }

  const {DOCUMENT_NODE} = node;

  if (node.nodeType === DOCUMENT_NODE) {
    return node.documentElement.scrollHeight;
  }

  return node.clientHeight;
}
