import React, { useState, useEffect } from "react";
import SingleComment from "./SingleComment";

const CommentList = ({ asin }) => {
  
  const [comments, setComments] = useState([]);

  
  useEffect(() => {
    if (asin) {
      fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MTBhMjhhZDEyOTAwMTU4NzZiZDIiLCJpYXQiOjE3MzMxNDg5NzAsImV4cCI6MTczNDM1ODU3MH0.nrrDVB1UUFuPI_WXjQBVZ8yvW-tTlkZl_JpTKZ_DCsI",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to fetch data");
          }
        })
        .then((data) => {
          setComments(data); 
        })
        .catch((error) => {
          console.error("Error fetching comments:", error);
          setComments([]); 
        });
    }
  }, [asin]); 

  
  if (!asin) {
    return <p>No comments to display. Select a book first!</p>;
  }

  return (
    <div data-testid="comment-list">
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>
            <SingleComment comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
