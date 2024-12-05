import { render, screen } from '@testing-library/react'
import App from '../../App'

test('renders Comment Area correctly', async () => {
  render(<App />)
  const commentArea = await screen.findByText(/Recensioni degli utenti/i)
  expect(commentArea).toBeInTheDocument()
})
