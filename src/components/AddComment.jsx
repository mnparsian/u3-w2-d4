import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";

const AddComment = ({ asin }) => {
  
  const [comment, setComment] = useState({
    comment: "",
    rate: "",
    elementId: asin || "",
  });

  
  useEffect(() => {
    setComment((prevComment) => ({
      ...prevComment,
      elementId: asin,
    }));
    console.log("Updated asin:", asin);
  }, [asin]); 

 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setComment((prevComment) => ({
      ...prevComment,
      [name]: value,
    }));
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MTBhMjhhZDEyOTAwMTU4NzZiZDIiLCJpYXQiOjE3MzMxNDg5NzAsImV4cCI6MTczNDM1ODU3MH0.nrrDVB1UUFuPI_WXjQBVZ8yvW-tTlkZl_JpTKZ_DCsI",
      },
      body: JSON.stringify(comment),
    })
      .then((response) => {
        if (response.ok) {
          alert("Comment added successfully!");
          setComment({
            comment: "",
            rate: "",
            elementId: asin,
          });
        } else {
          throw new Error("Failed to add comment");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error adding the comment");
      });
  };

  return (
    <Form onSubmit={handleSubmit} data-testid="add-comment">
      <InputGroup className="mb-3">
        <Form.Control
          name="comment"
          placeholder="Write your comment"
          value={comment.comment}
          onChange={handleChange}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          type="number"
          name="rate"
          placeholder="Rate from 1 to 5"
          min="1"
          max="5"
          value={comment.rate}
          onChange={handleChange}
          required
        />
      </InputGroup>
      <Button type="submit" variant="primary">
        Add Comment
      </Button>
    </Form>
  );
};

export default AddComment;
