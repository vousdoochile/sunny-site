import test from 'node:test';
import assert from 'node:assert/strict';
import {codeFromFragment,joinSmsUri} from '../app/join/code.mjs';

test('short and legacy fragments normalize without guessing ambiguous characters',()=>{
  assert.equal(codeFromFragment('#c=abcd2345'),'ABCD2345');
  assert.equal(codeFromFragment('#c='+'A'.repeat(48)),'a'.repeat(48));
  for(const value of ['', '#c=ABCD0234','#c=ABCDO234','#c=ABCDI234','#c=ABCD1234','#c=ABCD2345&c=EFGH6789','#c=javascript:alert(1)','#c=%3Cscript%3E','#c=ABCD2345%0A']) assert.equal(codeFromFragment(value),null,value);
});
test('iPhone and Android compose the exact recipient and JOIN body',()=>{
  const expected='sms:+18554636694';
  assert.equal(joinSmsUri('ABCD2345','iPhone'),expected+'&body=JOIN%20ABCD2345');
  assert.equal(joinSmsUri('ABCD2345','Android'),expected+'?body=JOIN%20ABCD2345');
  assert.equal(joinSmsUri('ABCD2345','Macintosh',5),expected+'&body=JOIN%20ABCD2345');
  assert.equal(joinSmsUri('a'.repeat(48),'iPad'),expected+'&body=JOIN%20'+'a'.repeat(48));
  assert.equal(joinSmsUri('ABCD2345&body=START'),null);
});
