import { render, screen} from '@testing-library/react'
import ViewBooking from './ViewBooking';

jest.mock("axios");
jest.mock("react-router-dom");

it("renders 'Booking page'", () =>{
    render(<ViewBooking />);
    const linkElement = screen.getByRole("service");
    expect(linkElement).toBeInTheDocument();
})