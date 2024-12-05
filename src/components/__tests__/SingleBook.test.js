// import { fireEvent, render, screen } from '@testing-library/react'
// import App from '../../App'
// import BookList from '../BookList'
// import SingleBook from '../SingleBook'

// test('gets selected', () => {
//   render(<SingleBook />)
//   const selected = screen.getAllByTestId('book')
//   fireEvent.click(selected, { target: { style: { border: '8px solid' } } })
//   expect(selected[0]).toBeTruthy()
// })

import { screen, render, fireEvent } from '@testing-library/react'
import App from '../../App'

describe('selected cards', () => {
  test('Verifica che il bordo cambi colore dopo il click', () => {
    render(<App />)
    const selectedBook = screen.getAllByTestId('book')
    const first = selectedBook[0]
    fireEvent.click(first)
    expect(first).toHaveStyle('border: 8px solid')
  })
  test('Verifica che al click della seconda card la prima non abbia il bordo rosso', () => {
    render(<App />)
    const selectedBook = screen.getAllByTestId('book')
    const first = selectedBook[0]
    const second = selectedBook[1]
    fireEvent.click(second)
    expect(first).not.toHaveStyle('border: 8px solid')
  })
})
