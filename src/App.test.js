import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('button has correct initial color', () => {
  render(<App />);
  //find an element with role of button and text of Change to blue
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  //expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

test('button turns blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
  //clickButton
  fireEvent.click(colorButton);
  //expect the button text to be change to red.
  expect(colorButton.textContent).toBe('Change to red');
});
