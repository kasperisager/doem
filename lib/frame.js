/**
 * Construct a new isolated frame from some HTML, optionally specifying a context.
 *
 * @param {String} html The HTML of the framge.
 * @param {Window} [context=window] The context to create the frame from.
 * @return {Window} The create frame.
 */
export default function frame(html, context = window) {
  const frame = context.open('about:blank', '_blank');
  const {document: scope} = frame;

  scope.write(html);
  scope.close();

  return frame;
}
