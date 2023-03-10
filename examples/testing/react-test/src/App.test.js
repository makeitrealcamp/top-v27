import { cleanup, render, fireEvent, screen, getByLabelText, getAllByTestId } from "@testing-library/react";
import App from "./App";


describe('App', () => {
  beforeEach(() => {
    cleanup()
  })

  it('should create a new book', () => {
    const mockData = {
      title: 'title 1',
      description: 'description 1',
    }

    render(<App/>)

    const titleInput = screen.getByLabelText('Title')
    fireEvent.change(titleInput, { target: { value: mockData.title } })

    const descriptionInput = screen.getByLabelText('Description')
    fireEvent.change(descriptionInput, { target: { value: mockData.description } })

    const buttonElement = screen.getByTestId('button')
    fireEvent.click(buttonElement)

    const booksElement = screen.getAllByTestId('book')

    expect(booksElement).toHaveLength(1)
  })
})