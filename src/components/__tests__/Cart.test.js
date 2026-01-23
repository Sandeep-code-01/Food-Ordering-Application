import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import Cart from "../Cart";
import "@testing-library/jest-dom";

it("Should render empty cart message", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Cart />
      </Provider>
    </BrowserRouter>
  );

  expect(screen.getByText(/cart is empty/i)).toBeInTheDocument();
});
