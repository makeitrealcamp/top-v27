import { Books } from ".";
import { cleanup, render, screen } from '@testing-library/react'

const mockBooks = [
  {
    id: 1,
    title: "title 1",
    description: "description 1",
    votes: 10,
  },
  {
    id: 2,
    title: "title 2",
    description: "description 2",
    votes: 20,
  },
  {
    id: 3,
    title: "title 3",
    description: "description 3",
    votes: 30,
  },
  {
    id: 4,
    title: "title 4",
    description: "description 4",
    votes: 40,
  },
];

describe('Books', () => {

  beforeEach(() => {
    cleanup()
  })

  it('should render a list of books', () => {
    render(<Books books={mockBooks} />)

    const booksElement = screen.getAllByTestId('book')
    expect(booksElement).toHaveLength(mockBooks.length)
  })

  it('should render message if there are no books', () => {
    render(<Books books={[]} />)

    const msgElement = screen.getByText('No books created!')
    expect(msgElement.tagName).toMatch(/p/i)
    expect(msgElement).toBeInTheDocument()
  })

})