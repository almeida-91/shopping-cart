import { getAllByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Shop from "./components/Shop";

describe("renders learn react link", () => {
  it("renders homepage", () => {
    render(<App />);
    const linkElement = screen.getByText(/Generic Shop/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe("Shop component", () => {
  it("renders the shop page", () => {
    render(<Shop />);
    const shoppingCartElement = screen.getByText(/Shopping Cart/i);
    expect(shoppingCartElement).toBeInTheDocument();
  });
});

describe("Add single item to cart", () => {
  it("adds one item to cart", () => {
    render(<Shop />);
    const buttons = screen.getAllByRole("button", { name: /Purchase/i });
    userEvent.click(buttons[0]);
    const shoppingCartElement = screen.getByText(/Shopping Cart: 1/i);
    expect(shoppingCartElement).toBeInTheDocument();
  });
});

describe("Add two items to cart", () => {
  it("adds two different items to cart", () => {
    render(<Shop />);
    const buttons = screen.getAllByRole("button", { name: /Purchase/i });
    userEvent.click(buttons[0]);
    userEvent.click(buttons[1]);
    const shoppingCartElement = screen.getByText(/Shopping Cart: 2/i);
    expect(shoppingCartElement).toBeInTheDocument();
  });
});

describe("Add three items to cart", () => {
  it("adds three different items to cart", () => {
    render(<Shop />);
    const buttons = screen.getAllByRole("button", { name: /Purchase/i });
    userEvent.click(buttons[0]);
    userEvent.click(buttons[1]);
    userEvent.click(buttons[2]);
    const shoppingCartElement = screen.getByText(/Shopping Cart: 3/i);
    expect(shoppingCartElement).toBeInTheDocument();
  });
});

describe("Add single item to cart twice", () => {
  it("adds the same item to cart twice", () => {
    render(<Shop />);
    const buttons = screen.getAllByRole("button", { name: /Purchase/i });
    userEvent.click(buttons[0]);
    userEvent.click(buttons[0]);
    const shoppingCartElement = screen.getByText(/Shopping Cart: 2/i);
    expect(shoppingCartElement).toBeInTheDocument();
  });
});

describe("Add two items to cart twice", () => {
  it("adds the same two items to cart twice", () => {
    render(<Shop />);
    const buttons = screen.getAllByRole("button", { name: /Purchase/i });
    userEvent.click(buttons[0]);
    userEvent.click(buttons[0]);
    userEvent.click(buttons[1]);
    userEvent.click(buttons[1]);
    const shoppingCartElement = screen.getByText(/Shopping Cart: 4/i);
    expect(shoppingCartElement).toBeInTheDocument();
  });
});

describe("Add three items to cart twice", () => {
  it("adds the same three items to cart twice", () => {
    render(<Shop />);
    const buttons = screen.getAllByRole("button", { name: /Purchase/i });
    userEvent.click(buttons[0]);
    userEvent.click(buttons[0]);
    userEvent.click(buttons[1]);
    userEvent.click(buttons[1]);
    userEvent.click(buttons[2]);
    userEvent.click(buttons[2]);
    const shoppingCartElement = screen.getByText(/Shopping Cart: 6/i);
    expect(shoppingCartElement).toBeInTheDocument();
  });
});
