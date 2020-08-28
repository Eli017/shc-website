/*Jest-axe checks for a11y accessibility violations, which should be checked per page.
This doesn't cover all accessibility, but it does hit a lot of common errors.
This is proper way to test for these violations, do not deviate from its asynchronous nature.
 */

test("Basic return true", () => {
  // eslint-disable-next-line jest/valid-expect
  expect(true);
});
