
const Tree = require("./searchWithArrayForTest");

const cities = require("../data/data");

const a = new Tree();

function testingPredictionWithArray() {
    cities.forEach(function (el) {
    a.insertToTree(el.toLowerCase());
  });
}

testingPredictionWithArray();
test("English 1", () => {
  expect(a.searchWord("addis ababa")).toEqual(["addis ababa"]);
});
test("English 2", () => {
  expect(a.searchWord("awash")).toEqual(["awash"]);
});
test("English 3", () => {
  expect(a.searchWord("bahir dar")).toEqual(["bahir dar"]);
});
test("English 4", () => {
  expect(a.searchWord("awas")).toEqual(["awasa","awash"]);
});
test("Amharic 1", () => {
    expect(a.searchWord("ወረ")).toEqual(["ወረ ኢሉ"]);
  });
test("Amharic 2", () => {
    expect(a.searchWord("አዲስ")).toEqual(["አዲስ አበባ"]);
  });
test("Amharic 3", () => {
    expect(a.searchWord("ባሌ")).toEqual(["ባሌ ሮቤ"]);
  });
test("Amharic 4", () => {
    expect(a.searchWord("ጅ")).toEqual(["ጅማ","ጅጅጋ"]);
  });
