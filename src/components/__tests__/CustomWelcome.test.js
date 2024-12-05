import { render, screen } from '@testing-library/react'
import CustomWelcome from '../CustomWelcome'

test('renders custom welcome alert', () => {
  render(<CustomWelcome />)
  const welcomeAlert = screen.getByText(/welcome to Epic Library!/i)
  expect(welcomeAlert).toBeInTheDocument()
})

