import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

describe("Search Functionality", () => {
  it("Should Search Res List for burger text input", async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );

    // ⏳ Wait for cards (NOT getAllBy)
    const cardsBeforeSearch = await screen.findAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(3);

    const searchInput = screen.getByTestId("searchInput");
    const searchBtn = screen.getByRole("button", { name: /search/i });

    fireEvent.change(searchInput, {
      target: { value: "burger" },
    });

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(2);
  });
});
