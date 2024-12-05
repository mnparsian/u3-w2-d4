import React from "react";
import { render, screen } from "@testing-library/react";
import CommentList from "../components/CommentList";
import { describe, it, expect } from "vitest";

describe("CommentList Component", () => {
  it("should display a message when no asin is provided", () => {
    // Render the component without an asin
    render(<CommentList asin={null} />);

    // Check that the no-comments message is displayed
    expect(screen.getByText("No comments to display. Select a book first!")).toBeInTheDocument();
  });

  it("should render an empty comment list when asin is provided but no data is fetched", () => {
    // Render the component with a valid asin
    render(<CommentList asin="12345" />);

    // Check that the comment list is empty initially
    const commentList = screen.getByTestId("comment-list");
    expect(commentList).toBeInTheDocument();
    expect(commentList.querySelectorAll("li")).toHaveLength(0);
  });
});
