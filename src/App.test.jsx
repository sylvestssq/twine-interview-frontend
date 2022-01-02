import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import App from './App';

jest.mock('axios');

test('main user actions in dashboard', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        id: 0,
        name: 'Tim',
        position: 'Senior Software Engineer',
        rehire_eligible: 'true',
        voluntary: true,
        terminated_date: '23 March 2021',
        termination_reason: null,
        profile_link: 'https://linkedin.com',
        email: 'tim@gmail.com',
        is_active: false
      },
      {
        id: 1,
        name: 'Bob',
        position: 'Senior Software Engineer',
        rehire_eligible: 'true',
        voluntary: false,
        terminated_date: '22 March 2021',
        termination_reason: null,
        profile_link: 'https://linkedin.com',
        email: 'bob@gmail.com',
        is_active: false
      }
    ]
  });

  act(() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

  // Dashboard should be loaded as default page
  expect(await screen.findByText('DASHBOARD')).toBeInTheDocument();
  expect(await screen.findByText('Attrition Timeline')).toBeInTheDocument();
  expect(await screen.findByText('Rehire Eligible')).toBeInTheDocument();
  expect(await screen.findByText('Rehire Ineligible')).toBeInTheDocument();
  expect(await screen.findByText('Rehire Unknown')).toBeInTheDocument();

  // Modal should appear on clicking an employee profile
  fireEvent.click(await screen.findByText('Tim, Senior Software Engineer'));
  expect(await screen.findByText('No recorded termination reason')).toBeInTheDocument();

  // Error message should appear when user tries to send an email to employee without a message
  fireEvent.click(await screen.findByText('Send Email'));
  expect(await screen.findByText('Message field is empty.')).toBeInTheDocument();

  // Modal should close when user enters a message and sends out email
  fireEvent.change(await screen.findByPlaceholderText('Reach out to Tim'), {
    target: { value: 'sample message' }
  });
  fireEvent.click(await screen.findByText('Send Email'));
  expect(screen.queryByText('No recorded termination reason')).toBeNull();
});

test('user actions in sider', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        id: 0,
        name: 'Tim',
        position: 'Senior Software Engineer',
        rehire_eligible: 'true',
        voluntary: true,
        terminated_date: '23 March 2021',
        termination_reason: null,
        profile_link: 'https://linkedin.com',
        email: 'tim@gmail.com',
        is_active: false
      }
    ]
  });

  act(() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

  // Sider should appear when user navigates to Polls page
  fireEvent.click(await screen.findByText('Polls'));
  expect(await screen.findByText('CPOHQ Polls')).toBeInTheDocument();
  expect(await screen.findByText('Add Counter')).toBeInTheDocument();

  // Sider should appear when user navigates to Forum page
  fireEvent.click(await screen.findByText('Forum'));
  expect(await screen.findByText('CPOHQ Forum')).toBeInTheDocument();
  expect(await screen.findByText('Add Counter')).toBeInTheDocument();

  // User should be able to add counter cards
  fireEvent.click(await screen.findByText('Add Counter'));
  expect(await screen.findByText('Counter: 0')).toBeInTheDocument();

  // User should be able to increment counter
  fireEvent.click(await screen.findByTestId('increment-button'));
  fireEvent.click(await screen.findByTestId('increment-button'));
  expect(await screen.findByText('Counter: 2')).toBeInTheDocument();

  // User should be able to decrement counter
  fireEvent.click(await screen.findByTestId('decrement-button'));
  expect(await screen.findByText('Counter: 1')).toBeInTheDocument();

  // User should be able to edit the name of counter
  fireEvent.click(await screen.findByTestId('edit-button'));
  expect(await screen.findByText('Update')).toBeInTheDocument();
  fireEvent.change(await screen.findByTestId('counter-input'), {
    target: { value: 'New Title' }
  });
  fireEvent.click(await screen.findByText('Update'));
  expect(await screen.findByText('New Title: 1')).toBeInTheDocument();

  // User should be able to delete a counter
  fireEvent.click(await screen.findByTestId('delete-button'));
  expect(screen.queryByText('New Title: 1')).toBeNull();
});

test('user actions in sider', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        id: 0,
        name: 'Tim',
        position: 'Senior Software Engineer',
        rehire_eligible: 'true',
        voluntary: true,
        terminated_date: '23 March 2021',
        termination_reason: null,
        profile_link: 'https://linkedin.com',
        email: 'tim@gmail.com',
        is_active: false
      }
    ]
  });

  act(() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

  // User should be able to navigate to Explorer page and no sider component
  fireEvent.click(await screen.findByText('Explorer'));
  expect(await screen.findByText('Explorer')).toBeInTheDocument();
  expect(screen.queryByText('Add Counter')).toBeNull();
});
