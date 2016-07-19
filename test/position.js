import test from 'tape';
import {frame} from '../lib/frame';
import {find} from '../lib/find';
import {position} from '../lib/position';

test('gets the current coordinates of an element relative to its offset parent', t => {
  const context = frame(`
    <style>
      body {
        margin: 0;
      }

      .foo {
        padding: 5px;
      }

      .bar {
        margin: 5px;
      }
    </style>

    <div class=foo>
      <div class=foo></div>
      <div class=bar></div>
    </div>
  `);

  const {document: scope} = context;

  const element = find(scope, '.bar');

  t.same(position(element), {top: 20, left: 10});
  context.close();
  t.end();
});
