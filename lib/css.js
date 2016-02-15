import style from './style';

/**
 * Get or set the value of a CSS property of an element.
 *
 * @example
 * p {
 *   color: red;
 * }
 * @example
 * <p>Lorem ipsum</p>
 * @example
 * const element = find(document, 'p');
 * css(element, 'color');
 * // => rgb(255, 0, 0)
 * css(element, 'color', 'blue');
 * @example
 * <p style="color: blue;">Lorem ipsum</p>
 *
 * @param {Element} element The element whose CSS property to get or set.
 * @param {string} property The CSS property to get or set.
 * @param {string} [value] The value of the CSS property if setting.
 * @return {string} The value of the CSS property if getting.
 */
export default function css(element, property, value) {
  if (value === undefined) {
    return style(element)[property];
  }

  element.style[property] = value;
}
