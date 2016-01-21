/**
 * Construct a new isolated frame from some HTML, optionally specifying a context.
 *
 * @param {String} html The HTML of the frame.
 * @param {Document} [context=document] The context to create the frame within.
 * @return {Window} The created frame.
 */
export default function frame(html, context = document) {
  const iframe = context.createElement('iframe');

  // Add the iframe to the body of the context to ensure that it renders.
  context.body.appendChild(iframe);

  const {contentWindow: frame} = iframe;
  const {document: scope} = frame;

  scope.write(html);
  scope.close();

  // Make closing the frame remove the containing iframe from the context.
  frame.close = () => context.body.removeChild(iframe);

  return frame;
}
