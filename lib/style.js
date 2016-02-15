import view from './view';

/**
 * Get the computed style of an element.
 *
 * @example
 * p {
 *   color: red;
 * }
 * @example
 * <p style="float: right;">Lorem ipsum</p>
 * @example
 * const element = find(document, 'p');
 * style(element);
 * // => CSSStyleDeclaration { color: 'rgb(255, 0, 0)', float: 'right', ... }
 *
 * @param {Element} element The element whose computed style to get.
 * @return {CSSStyleDeclaration} The computed style of the element.
 */
export default function style(element) {
  return view(element).getComputedStyle(element, null);
}
