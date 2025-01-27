import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Portfolio } from "../Portfolio";

describe("Portfolio", () => {
  it("renders header with navigation", () => {
    render(<Portfolio />);
    expect(screen.getByText("Vadiny Pherlin Fotsing")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
  });

  it("renders experience section", () => {
    render(<Portfolio />);
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("ReactJS Developer")).toBeInTheDocument();
    expect(screen.getByText("Nextget Consulting")).toBeInTheDocument();
  });

  it("renders skills section", () => {
    render(<Portfolio />);
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("ReactJS")).toBeInTheDocument();
    expect(screen.getByText("Advanced")).toBeInTheDocument();
  });

  it("renders contact section", () => {
    render(<Portfolio />);
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("vadinyfotsing@gmail.com")).toBeInTheDocument();
  });
});
