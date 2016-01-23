/**
 * Get or set the value of an attribute of an element.
 *
 * @param {Element} element The element whose attribute to get or set.
 * @param {string} name The name of the attribute to get or set.
 * @param {*} [value] The value of the attribute if setting.
 * @return {*} The value of the attribute if getting.
 */
export default function attr(element, name, value) {
  if (value === undefined) {
    if (!element.hasAttribute(name)) {
      return false;
    }

    const attr = element.getAttribute(name);

    switch (attr.toLowerCase()) {
      // Distinguish HTML5 boolean attributes.
      // https://html.spec.whatwg.org/#boolean-attributes
      case '':
      case name.trim().toLowerCase():
        return true;
      default:
        return attr;
    }
  }

  switch (value) {
    case true:
      element.setAttribute(name, name);
      break;
    case false:
      element.removeAttribute(name);
      break;
    default:
      element.setAttribute(name, value);
  }
}
