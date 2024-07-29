import { render, screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InsertBooking from './InsertBooking'
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
  }));
   
  const mock = new MockAdapter(axios);
   
  const mockNavigate = jest.fn();
  useNavigate.mockReturnValue(mockNavigate);

  it("renders 'Services text' ", () => {
    render(<InsertBooking />);
    expect(screen.getByPlaceholderText("Services")).toHaveTextContent("");
  });

  it("renders 'Pricing text' ", () => {
    render(<InsertBooking />);
    expect(screen.getByPlaceholderText("Pricing")).toHaveTextContent("");
  });

  it("renders 'Offers text' ", () => {
    render(<InsertBooking />);
    expect(screen.getByPlaceholderText("Offers")).toHaveTextContent("");
  });

  it("renders 'Submit button' ", () => {
    render(<InsertBooking />);
    const loginButton = screen.getByRole('button', { name: "Insert" });
    expect(loginButton).toBeInTheDocument();
  });