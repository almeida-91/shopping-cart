import { render, screen } from "@testing-library/react";
import App from "./App";
import Shop from "./components/Shop";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/generic shop/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Shop component", () => {
  it("renders the shop page", () => {
    render(<Shop />);
    const shoppingCartElement = screen.getByText(/Shopping Cart/i);
    expect(shoppingCartElement).toBeInTheDocument();
  });
});
