import { render, screen } from "@testing-library/react";
import Grocery from "../Grocery";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

describe("Grocery page tests", () => {
  it("Should render Grocery component without crashing", () => {
    render(
      <Provider store={appStore}>
        <Grocery />
      </Provider>
    );

    // Find heading by text
    const heading = screen.getByRole("heading", { name: /Grocery Online Store/i });
    expect(heading).toBeInTheDocument();
  });
});
