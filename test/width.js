import test from 'tape';
import frame from '../lib/frame';
import find from '../lib/find';
import width from '../lib/width';

test('gets the computed width of an element', t => {
  const context = frame(`
    <style>
      div {
        width: 20px;
        padding: 10px;
      }
    </style>

    <div></div>
  `);

  const {document: scope} = context;

  const element = find(scope, 'div');

  t.is(width(element), 40);
  context.close();
  t.end();
});

test('gets the computed height of a window', t => {
  t.is(width(window), document.documentElement.clientWidth);
  t.end();
});
