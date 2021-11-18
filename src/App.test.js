import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import App from './App';

const { type, click } = userEvent

test('a user with an account can log in', async () => {
  render(<App />);

  const usernameInput = screen.getByLabelText("Username")
  const passwordInput = screen.getByLabelText("Password")
  const submitButton = screen.getByRole("button")

  type(usernameInput, "milesdavis")
  type(passwordInput, "whatever")

  click(submitButton)

  const logoutButton = await screen.findByText("milesdavis")

  expect(logoutButton).toHaveTextContent(/milesdavis/)
});

test('a second user with an account can log in', async () => {
  render(<App />);

  const usernameInput = screen.getByLabelText("Username")
  const passwordInput = screen.getByLabelText("Password")
  const submitButton = screen.getByRole("button")

  type(usernameInput, "trane")
  type(passwordInput, "whatever")

  click(submitButton)

  const logoutButton = await screen.findByText("trane")

  expect(logoutButton).toHaveTextContent(/trane/)
});
