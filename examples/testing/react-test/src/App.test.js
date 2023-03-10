import { cleanup, render, screen} from '@testing-library/react';
import App from './App';

describe("App", () => {

  beforeEach(() =>{
    cleanup()
  })
  // beforeAll
  // afterEach
  // afterAll


  test('renders learn react link', () => {
    const {
      //debug,
      getByText
    } = render(<App />);
    //debug()
    const testIdElement = screen.getByTestId('custom-element')
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
    expect(testIdElement).toBeInTheDocument()
  });

})