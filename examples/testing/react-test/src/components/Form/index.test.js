import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { Form } from ".";

describe('Form', () => {
  beforeEach(() => {
    cleanup()
  })

  it('should change from fields and submit to a new book', () => {
    const mockData = {
      title: 'title 1',
      description: 'description 1',
    }

    const createBook = jest.fn()

    render(<Form createBook={createBook} />)

    const titleInput = screen.getByLabelText('Title')
    fireEvent.change(titleInput, { target: { value: mockData.title } })
    expect(titleInput.value).toMatch(mockData.title)

    const descriptionInput = screen.getByLabelText('Description')
    fireEvent.change(descriptionInput, { target: { value: mockData.description } })
    expect(descriptionInput.value).toMatch(mockData.description)

    const form = screen.getByTestId('form')
    fireEvent.submit(form)

    expect(createBook).toHaveBeenCalled()
    expect(createBook).toHaveBeenCalledWith(mockData.title, mockData.description)
    expect(titleInput.value).toMatch('')
    expect(descriptionInput.value).toMatch('')
  })

})