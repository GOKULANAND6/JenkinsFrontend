import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Signup from './Signup';
 
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));
 
const mock = new MockAdapter(axios);
 
const mockNavigate = jest.fn();
useNavigate.mockReturnValue(mockNavigate);
 
 
it("renders 'Login Heading text' " , () =>{
  render(<Signup />);
const linkElement = screen.getByRole("heading");
expect(linkElement).toBeInTheDocument();
})
 
it("renders 'Login Sub heading text' " , () =>{
    render(<Signup />);
  const linkElement = screen.getByRole("namelabel");
  expect(linkElement).toBeInTheDocument();
  })

  it("renders 'Login Sub heading text' " , () =>{
    render(<Signup />);
  const linkElement = screen.getByRole("emaillabel");
  expect(linkElement).toBeInTheDocument();
  })

  it("renders 'Login Sub heading text' " , () =>{
    render(<Signup />);
  const linkElement = screen.getByRole("passlabel");
  expect(linkElement).toBeInTheDocument();
  })

  it("renders 'Login Sub heading text' " , () =>{
    render(<Signup />);
  const linkElement = screen.getByRole("p-heading");
  expect(linkElement).toBeInTheDocument();
  })

  it("renders 'Submit button' ", () => {
    render(<Signup />);
    const loginButton = screen.getByRole('button', { name: "Sign up" });
    expect(loginButton).toBeInTheDocument();
  });