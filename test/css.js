import test from 'tape';
import {frame} from '../lib/frame';
import {find} from '../lib/find';
import {css} from '../lib/css';

test('gets the value of a CSS property', t => {
  const context = frame(`
    <style>
      div {
        color: blue;
      }
    </style>

    <div style="background-color: red"></div>
  `);

  const {document: scope} = context;

  const element = find(scope, 'div');

  t.is(css(element, 'color'), 'rgb(0, 0, 255)');
  t.is(css(element, 'background-color'), 'rgb(255, 0, 0)');

  context.close();
  t.end();
});

test('sets the value of a CSS property', t => {
  const context = frame(`
    <div></div>
  `);

  const {document: scope} = context;

  const element = find(scope, 'div');

  css(element, 'color', 'red');
  t.is(css(element, 'color'), 'rgb(255, 0, 0)');

  context.close();
  t.end();
});
