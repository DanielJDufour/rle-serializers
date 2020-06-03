const test = require("ava");
const serialize_basic_csv = require("./serialize_basic_csv");
const serialize_advanced_csv = require("./serialize_advanced_csv");
const deserialize_basic_csv = require("./deserialize_basic_csv");
const deserialize_advanced_csv = require("./deserialize_advanced_csv");


test("basic csv serialization", t => {
  const data = [5, 3, 1, 8, 2, 0];
  const csv = serialize_basic_csv(data);
  t.is(csv, "5,3,1,8,2,0");
});

test("advanced csv serialization", t => {
  const data = [5, 3, 1, 8, 2, 0];
  const csv = serialize_advanced_csv(data);
  t.is(csv, "3x5,8,0x2");
});

test("basic csv deserialization", t => {
  const csv = "5,3,1,8,2,0";
  const data = deserialize_basic_csv(csv);
  t.deepEqual(data, [5, 3, 1, 8, 2, 0]);
});

test("advanced csv deserialization", t => {
  const csv = "3x5,8,0x2";
  const data = deserialize_advanced_csv(csv);
  t.deepEqual(data, [5, 3, 1, 8, 2, 0]);
});