import { render, screen } from '@testing-library/react';
import Video from './Video';

 
it("renders 'Login Name text' " , () =>{
  render(<Video />);
  const linkElement = screen.getByRole("heading");
  expect(linkElement).toBeInTheDocument();
})