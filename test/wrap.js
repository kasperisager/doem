import test from 'tape';
import fragment from '../lib/fragment';
import find from '../lib/find';
import html from '../lib/html';
import wrap from '../lib/wrap';

test('wraps an HTML structure around an element', t => {
  const scope = fragment(`
    <div><span></span></div>
  `);

  const div = find(scope, 'div');
  const span = find(scope, 'span');

  wrap(span, '<b></b>');
  t.is(html(div), '<b><span></span></b>');
  t.end();
});

test('nests several levels deep', t => {
  const scope = fragment(`
    <div><span></span></div>
  `);

  const div = find(scope, 'div');
  const span = find(scope, 'span');

  wrap(span, '<b><s></s><i></i></b>');
  t.is(html(div), '<b><s><span></span></s><i></i></b>');
  t.end();
});

test('uses only the first element of the HTML structure', t => {
  const scope = fragment(`
    <div><span></span></div>
  `);

  const div = find(scope, 'div');
  const span = find(scope, 'span');

  wrap(span, '<b></b><s></s>');
  t.is(html(div), '<b><span></span></b>');
  t.end();
});
