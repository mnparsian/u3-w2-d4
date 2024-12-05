import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SingleBook from "../components/SingleBook";
import { describe, it, expect, vi } from "vitest";

describe("SingleBook Component", () => {
  it("should change border color on click", () => {
    // Sample book data
    const book = {
      title: "Test Book",
      img: "https://via.placeholder.com/150",
      price: 10,
      category: "Fiction",
    };

    // Mock function for handling book click
    const handleBookClick = vi.fn();

    // Initial render with isSelected = false
    const { container } = render(
      <SingleBook book={book} isSelected={false} onBookClick={handleBookClick} />
    );

    // Find the book card within the specific container
    const cardElement = container.querySelector('[data-testid="single-book"]');

    // Simulate a click on the card
    fireEvent.click(cardElement);

    // Verify that the click handler is called
    expect(handleBookClick).toHaveBeenCalledTimes(1);

    // Re-render the component with isSelected = true
    const { container: updatedContainer } = render(
      <SingleBook book={book} isSelected={true} onBookClick={handleBookClick} />
    );

    // Verify that the border color changes to red
    const updatedCardElement = updatedContainer.querySelector('[data-testid="single-book"]');
    expect(updatedCardElement).toHaveStyle("border: 2px solid red");
  });
});
