import { fireEvent, render, screen } from '@testing-library/react';
import Main from './Main';
import { MemoryRouter } from 'react-router';
import {initializeTimes} from './Main';
import BookingForm from './BookingForm';

test('check TextEncoder availability', () => {
    expect(global.TextEncoder).toBeDefined();
});

 const timesArray = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ]

test('initializeTimes returns expected values', ()=> {
    render(<MemoryRouter>
            <Main />
        </MemoryRouter>);
    expect(initializeTimes()).toEqual(timesArray);
})

test('updateTimes returns same value provided in state', () => {
    render(<BookingForm />);
    const submitButton = screen.getByText("Make Your reservation");
    const timeSelector = screen.getByLabelText("Choose time");
    const options = within(timeSelector).getAllByRole("option");
    fireEvent.click(submitButton);
    expect(options).toEqual(timesArray);
})