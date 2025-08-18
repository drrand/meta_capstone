import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from "./BookingForm"


const today = new Date();

function formatDate(date) {
    date.toLocaleString('sv-SE', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    })
}

const mockFormState = {
        "resDate": formatDate(today),
        "resTime": "17:30",
        "guestNum": 1,
        "occasion": "Birthday"
}

const mockAvailableTimes = ['16:30', '17:00', '17:30'];

test('Form HTML Validation Is Applied', () => {
    
    render(<BookingForm formState={mockFormState} availableTimes={mockAvailableTimes}/>);

    const dateInput = screen.getByLabelText('Choose date');
    const timeInput = screen.getByLabelText('Choose time');
    const guestsInput = screen.getByLabelText('Number of guests');
    const occasionInput = screen.getByLabelText('Occasion');

    expect(dateInput).toHaveAttribute('required');
    expect(timeInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(occasionInput).toHaveAttribute('required');
})

test('Forms invalid state functions', () => {

    render(<BookingForm formState={mockFormState} availableTimes={mockAvailableTimes} />);

    const submit = screen.getByText('Make Your reservation');

    expect(submit).toBeDisabled();

})

test('Forms Valid state functions', () => {

    const mockSetFunction = jest.fn();

    render(<BookingForm formState={mockFormState} availableTimes={mockAvailableTimes} setFormState={mockSetFunction} />);

    const dateInput = screen.getByLabelText('Choose date');
    const timeInput = screen.getByLabelText('Choose time');
    const guestsInput = screen.getByLabelText('Number of guests');
    const occasionInput = screen.getByLabelText('Occasion');
    const submit = screen.getByText('Make Your reservation');

    // fireEvent.change(dateInput, { target: { value: `${today.getFullYear()}-${parseInt(today.getMonth()) + 1}-${parseInt(today.getDate()) + 1}` }});

    fireEvent.change(dateInput, { target: { value: '2049-12-12'}});

    fireEvent.change(timeInput, { target: { value: '23:30'} });

    fireEvent.change(guestsInput, { target: { value: 2 }});

    fireEvent.change(occasionInput, { target: {value: 'Anniversary'}});

    expect(submit).toBeEnabled();

})
