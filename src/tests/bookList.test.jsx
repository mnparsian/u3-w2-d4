import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BookList from '../components/BookList'; 
import books from '../data/fantasy.json'; 

describe('BookList Component', () => {
  it('renders the correct number of SingleBook components', () => {
 
    render(
      <BookList
        books={books}
        onBookSelect={() => {}}
        selectedAsin={null}
      />
    );
    screen.debug();

    const singleBookComponents = screen.getAllByTestId('single-book');


    expect(singleBookComponents).toHaveLength(books.length);
  });
});
