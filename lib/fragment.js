/**
 * Construct a document fragment from some HTML, optionally specifying a context.
 *
 * @param {String} html The HTML of the document fragment.
 * @param {Document} [context=document] The context to create the fragment within.
 * @return {DocumentFragment} The created document fragment.
 * @private
 */
export default function fragment(html, context = document) {
  const template = context.createElement('template');
  template.innerHTML = html;
  return template.content;
}
