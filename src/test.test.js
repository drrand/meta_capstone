import { screen, render } from '@testing-library/react'

test("check test environment", () => {
  expect(typeof window).toBe("object");       // jsdom gives you window
  expect(typeof document).toBe("object");     // jsdom gives you document
  expect(document.createElement("div")).toBeInstanceOf(HTMLElement);
});