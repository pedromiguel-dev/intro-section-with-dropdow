import { render, screen } from "@testing-library/react";
import NavBar from "..";
import toBeInTheDocument from "@testing-library/jest-dom";

test("Renders main page correctly", () => {
  render(<NavBar />);
  const navbar = screen.getByTestId("navbar");
  expect(navbar).toBeTruthy();
});
