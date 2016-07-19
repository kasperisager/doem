import test from 'tape';
import {frame} from '../lib/frame';
import {find} from '../lib/find';
import {style} from '../lib/style';

test('gets the computed style of an element', t => {
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
  const computed = style(element);

  t.is(computed.color, 'rgb(0, 0, 255)');
  t.is(computed['background-color'], 'rgb(255, 0, 0)');

  context.close();
  t.end();
});
