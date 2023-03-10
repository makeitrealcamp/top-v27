import { Book } from ".";
import { cleanup, render, screen } from '@testing-library/react'

describe('Book', () => {

  beforeEach(() => {
    cleanup()
  })

  it('should render correctly', () => {

    const mockData = {
      title: 'title 1',
      description: 'description 1',
      votes: 0
    }

    render(
      <Book 
        title={mockData.title}
        description={mockData.description}
        votes={mockData.votes}
      />
    )

    const elementTitle = screen.getByText(mockData.title)
    const elementDescription = screen.getByText(mockData.description)
    const elementVotes = screen.getByTestId('votes')
    
    expect(elementTitle).toBeInTheDocument()
    expect(elementTitle.tagName).toMatch(/h2/i)
    expect(elementDescription).toBeInTheDocument()
    expect(elementDescription.tagName).toMatch(/p/i)
    expect(elementVotes).toBeInTheDocument()

  })

})
