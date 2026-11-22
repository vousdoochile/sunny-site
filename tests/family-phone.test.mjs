import test from "node:test";
import assert from "node:assert/strict";
import { recipientNumber } from "../app/family/phone.mjs";

test("formatted U.S. and exact +1 destinations preserve the intended handset", () => {
  assert.equal(recipientNumber("(202) 555-0142"), "+12025550142");
  assert.equal(recipientNumber("1 (202) 555-0142"), "+12025550142");
  assert.equal(recipientNumber("+1 (202) 555-0142"), "+12025550142");
});

test("short or long +1 input cannot prepare a truncated or different destination", () => {
  assert.equal(recipientNumber("+1202555014"), null);
  assert.equal(recipientNumber("+120255501422"), null);
  assert.equal(recipientNumber("+10255550142"), null);
  assert.equal(recipientNumber("+12020550142"), null);
});

test("malformed explicit country codes never fall back to U.S. parsing", () => {
  assert.equal(recipientNumber("+0123456789"), null);
  assert.equal(recipientNumber("+02025550142"), null);
  assert.equal(recipientNumber("+1+2025550142"), null);
  assert.equal(recipientNumber("++12025550142"), null);
});

test("empty, incomplete and non-phone input fails; international code is retained", () => {
  for (const value of ["", "123", "2025550142 ext 1", "0202555014"]) {
    assert.equal(recipientNumber(value), null);
  }
  assert.equal(recipientNumber("+44 7700 900123"), "+447700900123");
});
