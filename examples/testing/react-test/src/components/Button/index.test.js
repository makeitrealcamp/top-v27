import { Button } from '.';
import { cleanup, render, screen } from '@testing-library/react'

describe('Button', () => {

  beforeEach(() => {
    cleanup()
  })

  it('should render correctly', () => {
    render(<Button type='button'>Crear</Button>)
    const buttonElement = screen.getByText('Crear')

    expect(buttonElement.type).toMatch(/button/i)
    expect(buttonElement).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<Button type='button'>Crear</Button>)

    expect(container).toMatchSnapshot()
  })
})