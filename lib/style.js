import view from './view';

/**
 * Get the computed style of an element.
 *
 * @param {Element} element The element whose computed style to get.
 * @return {CSSStyleDeclaration} The computed style of the element.
 */
export default function style(element) {
  return view(element).getComputedStyle(element, null);
}
