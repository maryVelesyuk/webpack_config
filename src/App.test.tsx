import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App testing", () => {
  it("render App", () => {
    render(<App />);

    expect(screen.getByTestId("testid")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
