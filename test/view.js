import test from 'tape';
import {frame} from '../lib/frame';
import {find} from '../lib/find';
import {view} from '../lib/view';

test('gets the window an element is contained within', t => {
  const context = frame(`
    <div></div>
  `);

  const {document: scope} = context;

  const element = find(scope, 'div');

  t.is(view(element), context);

  context.close();
  t.end();
});

test('gets the window a document is contained within', t => {
  t.is(view(document), window);
  t.end();
});

test('gets the window itself when given a window', t => {
  t.is(view(window), window);
  t.end();
});
