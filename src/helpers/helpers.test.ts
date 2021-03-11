import { fromatDate, addCommaSeparator } from "./helpers";

// fromatDate
test("format date - two digits day", () => {
  expect(fromatDate("2021-08-19")).toBe("19 Aug 2021");
});

test("format date - one digits day", () => {
  expect(fromatDate("2021-01-06")).toBe("06 Jan 2021");
});

test("format date - December", () => {
  expect(fromatDate("2021-12-06")).toBe("06 Dec 2021");
});

// addCommaSeparator
test("addCommaSeparator - less than 1000", () => {
  expect(addCommaSeparator(876)).toBe("876.00");
});

test("addCommaSeparator - more than 1000", () => {
  expect(addCommaSeparator(1876)).toBe("1,876.00");
});

test("addCommaSeparator - more than 10000", () => {
  expect(addCommaSeparator(11876)).toBe("11,876.00");
});

test("addCommaSeparator - more than 1000000", () => {
  expect(addCommaSeparator(1111876)).toBe("1,111,876.00");
});

test("addCommaSeparator - decimal point - less than 1000", () => {
  expect(addCommaSeparator(876.78)).toBe("876.78");
});

test("addCommaSeparator - decimal point - more than 1000", () => {
  expect(addCommaSeparator(1876.78)).toBe("1,876.78");
});

test("addCommaSeparator - decimal point - more than 10000", () => {
  expect(addCommaSeparator(11876.78)).toBe("11,876.78");
});

test("addCommaSeparator - decimal point - more than 1000000", () => {
  expect(addCommaSeparator(1111876.78)).toBe("1,111,876.78");
});

test("addCommaSeparator - one decimal digit - less than 1000", () => {
  expect(addCommaSeparator(876.4)).toBe("876.40");
});
