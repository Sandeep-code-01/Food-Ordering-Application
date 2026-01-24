import { render, screen, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../../utils/UserContext";

// Mock UserContext
const mockUserContext = {
  loggedInUser: "TestUser",
  setUserName: jest.fn(),
};

describe("Body Component - Search Functionality", () => {
  it("Should search restaurant list for burger", async () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={mockUserContext}>
          <Body />
        </UserContext.Provider>
      </BrowserRouter>
    );

    // Wait for all restaurant cards (after shimmer)
    const allCards = await screen.findAllByTestId("resCard");

    // Filter out shimmer placeholders (if they have animation)
    const restaurantCards = allCards.filter(
      (card) => !card.className.includes("animate-pulse")
    );

    // ✅ Use dynamic check instead of fixed number
    expect(restaurantCards.length).toBeGreaterThan(0);

    // 🔍 Perform search
    fireEvent.change(screen.getByTestId("searchInput"), {
      target: { value: "burger" },
    });
    fireEvent.click(screen.getByText("Search"));

    // Wait for filtered cards
    const filteredCards = await screen.findAllByTestId("resCard");
    const realFiltered = filteredCards.filter(
      (card) => !card.className.includes("animate-pulse")
    );

    // ✅ Check that at least one card matched the search
    expect(realFiltered.length).toBeGreaterThan(0);

    // Optional: check if filtered cards contain "burger" in name
    realFiltered.forEach((card) => {
      expect(card.textContent.toLowerCase()).toContain("burger");
    });
  });
});
