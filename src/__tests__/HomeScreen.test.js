/**
 * @jest-environment jsdom
 */

import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomeScreen from "../screens/HomeScreen";

test("expect nav bar to render on home component", () => {
  render(<HomeScreen />);

  // Check if NavBar component is rendered
  const navBar = screen.getByTestId("navComponent");
  expect(navBar).toBeInTheDocument();
});
