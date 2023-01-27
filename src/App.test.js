import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";

beforeEach(() => {
  window.sessionStorage.clear();
});

describe("renders learn react link", () => {
  it("renders homepage", () => {
    render(<App />);
    const linkElement = screen.getByText(/Generic Shop/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe("Shop component", () => {
  it("renders the shop page", () => {
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );
    const quant = screen.getByTestId("quant");
    expect(quant).toBeInTheDocument();
  });
});

describe("Add single item to cart", () => {
  it("adds one item to cart", () => {
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );
    const buttons = screen.getAllByRole("button", { name: /Purchase/i });
    userEvent.click(buttons[0]);
    const quant = screen.getByTestId("quant");
    expect(quant.innerHTML).toBe("1");
  });
});

describe("Add two items to cart", () => {
  it("adds two different items to cart", () => {
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );
    const buttons = screen.getAllByRole("button", { name: /Purchase/i });
    userEvent.click(buttons[0]);
    userEvent.click(buttons[1]);
    const quant = screen.getByTestId("quant");
    expect(quant.innerHTML).toBe("2");
  });
});

describe("Add three items to cart", () => {
  it("adds three different items to cart", () => {
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );
    const buttons = screen.getAllByRole("button", { name: /Purchase/i });
    userEvent.click(buttons[0]);
    userEvent.click(buttons[1]);
    userEvent.click(buttons[2]);
    const quant = screen.getByTestId("quant");
    expect(quant.innerHTML).toBe("3");
  });
});

describe("Add single item to cart twice", () => {
  it("adds the same item to cart twice", () => {
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );
    const buttons = screen.getAllByRole("button", { name: /Purchase/i });
    userEvent.click(buttons[0]);
    userEvent.click(buttons[0]);
    const quant = screen.getByTestId("quant");
    expect(quant.innerHTML).toBe("2");
  });
});

describe("Add two items to cart twice", () => {
  it("adds the same two items to cart twice", () => {
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );
    const buttons = screen.getAllByRole("button", { name: /Purchase/i });
    userEvent.click(buttons[0]);
    userEvent.click(buttons[0]);
    userEvent.click(buttons[1]);
    userEvent.click(buttons[1]);
    const quant = screen.getByTestId("quant");
    expect(quant.innerHTML).toBe("4");
  });
});

describe("Add three items to cart twice", () => {
  it("adds the same three items to cart twice", () => {
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );
    const buttons = screen.getAllByRole("button", { name: /Purchase/i });
    userEvent.click(buttons[0]);
    userEvent.click(buttons[0]);
    userEvent.click(buttons[1]);
    userEvent.click(buttons[1]);
    userEvent.click(buttons[2]);
    userEvent.click(buttons[2]);
    const quant = screen.getByTestId("quant");
    expect(quant.innerHTML).toBe("6");
  });
});
