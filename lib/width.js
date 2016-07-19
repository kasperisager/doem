/**
 * Get the computed width of a node.
 *
 * @example
 * div {
 *   padding: 0 10px;
 * }
 * p {
 *   width: 40px;
 * }
 * @example
 * <div>
 *   <p>Lorem ipsum</p>
 * </div>
 * @example
 * const element = find(document, 'div');
 * width(element);
 * // => 60
 *
 * @param {Element|Document|Window} node The node whose computed width to get.
 * @return {number} The computed width of the node.
 */
export default function width(node) {
  if (node === node.window) {
    return node.document.documentElement.clientWidth;
  }

  const {DOCUMENT_NODE} = node;

  if (node.nodeType === DOCUMENT_NODE) {
    const body = node.body;
    const html = node.documentElement;

    return Math.max(
      body.offsetWidth, html.offsetWidth,
      body.scrollWidth, html.scrollWidth,
      html.clientWidth
    );
  }

  return node.clientWidth;
}
