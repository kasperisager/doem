import test from 'tape';
import {frame} from '../lib/frame';
import {find} from '../lib/find';
import {height} from '../lib/height';

test('gets the computed height of an element', t => {
  const context = frame(`
    <style>
      div {
        padding: 10px;
        line-height: 20px;
      }
    </style>

    <div>Foo</div>
  `);

  const {document: scope} = context;

  const element = find(scope, 'div');

  t.is(height(element), 40);
  context.close();
  t.end();
});

test('gets the computed height of a window', t => {
  t.is(height(window), document.documentElement.clientHeight);
  t.end();
});
