import { render, screen } from '@testing-library/react'

import App from '../../App'

test('renders all the cards', () => {
  render(<App />)
  const arrayOfCards = screen.getAllByTestId('book')
  expect(arrayOfCards).toHaveLength(150)
})
