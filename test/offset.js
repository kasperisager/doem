import test from 'tape';
import frame from '../lib/frame';
import find from '../lib/find';
import offset from '../lib/offset';

test('gets the current coordinates of an element relative to its document', t => {
  const context = frame(`
    <style>
      body {
        margin: 0;
      }

      .foo {
        line-height: 20px;
      }

      .bar {
        margin-top: 10px;
        margin-left: 40px;
      }
    </style>

    <div class=foo>Foo</div>
    <div class=bar></div>
  `);

  const {document: scope} = context;

  const element = find(scope, '.bar');

  t.same(offset(element), {top: 30, left: 40});
  context.close();
  t.end();
});
