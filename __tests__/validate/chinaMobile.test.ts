import chinaMobile from "../../src/validate/chinaMobile";

test("check 13170273187", () => {
  expect(chinaMobile("13170273187")).toBe(true);
});

test("check 13170273187", () => {
  expect(chinaMobile("13170273187g")).toBe(false);
});
