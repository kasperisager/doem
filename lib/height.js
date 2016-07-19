/**
 * Get the computed height of a node.
 *
 * @example
 * div {
 *   padding: 10px 0 5px;
 * }
 * p {
 *   line-height: 20px;
 * }
 * @example
 * <div>
 *   <p>Lorem ipsum</p>
 * </div>
 * @example
 * const element = find(document, 'div');
 * height(element);
 * // => 35
 *
 * @param {Element|Document|Window} node The node whose computed height to get.
 * @return {number} The computed height of the node.
 */
export default function height(node) {
  if (node === node.window) {
    return node.document.documentElement.clientHeight;
  }

  const {DOCUMENT_NODE} = node;

  if (node.nodeType === DOCUMENT_NODE) {
    const body = node.body;
    const html = node.documentElement;

    return Math.max(
      body.offsetHeight, html.offsetHeight,
      body.scrollHeight, html.scrollHeight,
      html.clientHeight
    );
  }

  return node.clientHeight;
}
