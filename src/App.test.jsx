import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

beforeEach(() => {
  jest.resetAllMocks();
});

test('loads dashboard page upon visit', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(await screen.findByText('DASHBOARD')).toBeInTheDocument();
});

test('Sider is visible in polls and forum page', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  userEvent.click(await screen.findByText(/Polls/i));
  expect(await screen.findByText('No counters available')).toBeInTheDocument();
});
