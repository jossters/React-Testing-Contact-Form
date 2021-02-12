import React from 'react';
import ContactForm from './ContactForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test("renders without errors", () => {
  render(<ContactForm />);
});

test("Testing Contact Form", () => {
// render
  render(<ContactForm />);

// query for all inputs

  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);

 // type into inputs
 
 const testUser ={
  firstName: "Johnny",
  lastName: "Murillo",
  email: "test",
  message: "Hello World"
}

  userEvent.type(firstNameInput, testUser.firstName);
  expect(firstNameInput).toHaveValue(testUser.firstName);

  userEvent.type(lastNameInput, testUser.lastName);
  expect(lastNameInput).toHaveValue(testUser.lastName);

  userEvent.type(emailInput, testUser.email);
  expect(emailInput).toHaveValue(testUser.email);

  userEvent.type(messageInput, testUser.message);
  expect(messageInput).toHaveValue(testUser.message);

// negative assertion
  const submitInput = screen.getByTestId(/submit/i);
 // query for the button
  userEvent.click(submitInput);

  const preRender = screen.findByLabelText(/data-display/i);
  // assert
  expect(preRender).toBeTruthy();
});