import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

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

test('initial conditions', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { id: 'colorBtn' });
  //check that the button starts out enabled
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('checkbox disabled button on first and enables on second click', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { id: 'colorBtn' });
  const checkbox = screen.getByRole('checkbox');

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test('Disabled button has gray backgound and revert to red', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', { id: 'colorBtn' });

  //disabled button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');

  //re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

test('clicked disabled button has gray background and reverts to blue.', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', { id: 'colorBtn' });

  //change button to blue
  fireEvent.click(colorButton);
  //disabled button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  //reenable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
});

describe('spaces before camel-case capital letters', () => {
  test('Works for inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletBlue')).toBe(
      'Medium Violet Blue'
    );
  });
});
