import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test('Renders the Button Text', ()=> {
    render(<BookingForm />);
    const buttonText = screen.getByText("Choose date");
    expect(buttonText).toBeInTheDocument();
})

