import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { MemoryRouter } from "react-router-dom"; // <-- changed
import "@testing-library/jest-dom";

const renderHeader = () =>
  render(
    <MemoryRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </MemoryRouter>
  );

it("Should render Header Component with a login button", () => {
  renderHeader();
  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart link", () => {
  renderHeader();
  const cartLink = screen.getByRole("link", { name: /🛒/ });
  expect(cartLink).toBeInTheDocument();
  expect(cartLink).toHaveAttribute("href", "/cart");
});

it("Should change Login Button to Logout on click", () => {
  renderHeader();
  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
