/**
 * @jest-environment jsdom
 */

import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomeScreen from "../screens/HomeScreen";
import { StaticRouter } from "react-router-dom/server";
import Banner from "../Banner";

test("expect nav bar to render on home component", () => {
  render(
    <StaticRouter>
      <HomeScreen />
    </StaticRouter>
  );

  // Check if NavBar component is rendered
  const navBar = screen.getByTestId("navComponent");
  expect(navBar).toBeInTheDocument();
});

test("expect a Banner to render on Home Component", () => {
  render(
    <StaticRouter>
      <HomeScreen />
    </StaticRouter>
  );

  const bannerComponent = screen.getByTestId("banner");
  expect(bannerComponent).toBeInTheDocument();
});
