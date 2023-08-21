/**
 * @jest-environment jsdom
 */

import { expect, test } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import LoginScreen from "../screens/LoginScreen";
import "@testing-library/jest-dom";

test("displays a login screen logo", async () => {
  render(<LoginScreen />);

  const logo = await screen.findByTestId("loginScreen_logo");
  expect(logo.src).toContain(
    "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
  );
});
