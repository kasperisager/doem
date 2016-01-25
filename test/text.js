import test from 'tape';
import fragment from '../lib/fragment';
import find from '../lib/find';
import html from '../lib/html';
import text from '../lib/text';

test('gets the text content of an element', t => {
  const scope = fragment(`
    <div>foo <span>bar</span></div>
  `);

  const element = find(scope, 'div');

  t.is(text(element), 'foo bar');
  t.end();
});

test('sets the text content of an element', t => {
  const scope = fragment(`
    <div>foo <span>bar</span></div>
  `);

  const element = find(scope, 'div');

  text(element, '<p>foo</p>');
  t.is(text(element), '<p>foo</p>');
  t.is(html(element), '&lt;p&gt;foo&lt;/p&gt;');
  t.end();
});
