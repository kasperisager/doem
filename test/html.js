import test from 'tape';
import {fragment} from '../lib/fragment';
import {find} from '../lib/find';
import {html} from '../lib/html';

test('gets the inner HTML of an element', t => {
  const scope = fragment(`
    <div><span></span></div>
  `);

  const element = find(scope, 'div');

  t.is(html(element), '<span></span>');
  t.end();
});

test('sets the inner HTML of an element', t => {
  const scope = fragment(`
    <html>
      <div><span></span></div>
    </html>
  `);

  const element = find(scope, 'div');

  html(element, '<a></a>');
  t.is(html(element), '<a></a>');
  t.end();
});
