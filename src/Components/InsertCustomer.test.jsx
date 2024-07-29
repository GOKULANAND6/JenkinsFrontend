import { render, screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InsertCustomer from './InsertCustomer';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
  }));
   
  const mock = new MockAdapter(axios);
   
  const mockNavigate = jest.fn();
  useNavigate.mockReturnValue(mockNavigate);

  it("renders 'Name text' ", () => {
    render(<InsertCustomer />);
    expect(screen.getByPlaceholderText("Name")).toHaveTextContent("");
  });

  it("renders 'Gender text' ", () => {
    render(<InsertCustomer />);
    expect(screen.getByPlaceholderText("Gender")).toHaveTextContent("");
  });

  it("renders 'Mobile text' ", () => {
    render(<InsertCustomer />);
    expect(screen.getByPlaceholderText("Mobile")).toHaveTextContent("");
  });

  it("renders 'Time text' ", () => {
    render(<InsertCustomer />);
    expect(screen.getByPlaceholderText("Arrival Time")).toHaveTextContent("");
  });

  it("renders 'password text' ", () => {
    render(<InsertCustomer />);
    expect(screen.getByPlaceholderText("Priority")).toHaveTextContent("");
  });

