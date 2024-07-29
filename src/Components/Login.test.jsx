import { render, screen} from '@testing-library/react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Login from './Login';
 
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));
 
const mock = new MockAdapter(axios);
 
const mockNavigate = jest.fn();
useNavigate.mockReturnValue(mockNavigate);
 
 
it("renders 'Login Heading text' " , () =>{
  render(<Login />);
const linkElement = screen.getByRole("login-heading");
expect(linkElement).toBeInTheDocument();
})
 
it("renders 'Login Sub heading text' " , () =>{
    render(<Login />);
  const linkElement = screen.getByRole("p-heading");
  expect(linkElement).toBeInTheDocument();
  })

  it("renders 'Login Sub heading text' " , () =>{
    render(<Login />);
  const linkElement = screen.getByRole("p2-heading");
  expect(linkElement).toBeInTheDocument();
  })

  it("renders 'Login Email label text' " , () =>{
    render(<Login />);
  const linkElement = screen.getByRole("email");
  expect(linkElement).toBeInTheDocument();
  })

  it("renders 'Login Password label text' " , () =>{
    render(<Login />);
  const linkElement = screen.getByRole("password");
  expect(linkElement).toBeInTheDocument();
  })

  it("renders 'Submit button' ", () => {
    render(<Login />);
    const loginButton = screen.getByRole('button', { name: "Log in" });
    expect(loginButton).toBeInTheDocument();
  });