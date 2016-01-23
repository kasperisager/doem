import style from './style';

/**
 * Get or set the value of a CSS property of an element.
 *
 * @param {Element} element The element whose CSS property to get or set.
 * @param {string} property The CSS property to get or set.
 * @param {*} [value] The value of the CSS property if setting.
 * @return {*} The value of the CSS property if getting.
 */
export default function css(element, property, value) {
  if (value === undefined) {
    return style(element)[property];
  }

  element.style[property] = value;
}
