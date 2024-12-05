import { getByText, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CommentArea from "../components/CommentArea";

describe('CommentArea component',()=>{
it('render the fallback message when mo asin is provided',()=>{
render(<CommentArea asin={null} />)
screen.debug()

const message = screen.getByRole('h2')
expect(message).toBeInTheDocument()
})

it("renders CommentList and AddComment when asin is provided", async () => {
    
   render(<CommentArea asin="0316438960" />);

    const reviewsHeading = screen.getByText(/Reviews:/i);
    expect(reviewsHeading).toBeInTheDocument();

    const commentList = screen.getByTestId("comment-list");
    const addComment = screen.getByTestId("add-comment");
    expect(commentList).toBeInTheDocument();
    expect(addComment).toBeInTheDocument();
})

})