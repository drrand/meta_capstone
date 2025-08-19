import { fireEvent, screen, render } from '@testing-library/react';
import Main from './Main';
import { MemoryRouter } from 'react-router';

test('Confirmation Page is populated', () => {

    render(
        <MemoryRouter initialEntries={['/Reservations']} >
            <Main />
        </MemoryRouter>
    );
    const dateInput = screen.getByLabelText('Choose date');
    const timeInput = screen.getByLabelText('Choose time');
    const guestsInput = screen.getByLabelText('Number of guests');
    const occasionInput = screen.getByLabelText('Occasion');
    const submit = screen.getByText('Make Your reservation');

    // fireEvent.change(dateInput, { target: { value: `${today.getFullYear()}-${parseInt(today.getMonth()) + 1}-${parseInt(today.getDate()) + 1}` }});

    fireEvent.change(dateInput, { target: { value: '2049-12-12'}});

    fireEvent.change(timeInput, { target: { value: '23:00'} });

    fireEvent.change(guestsInput, { target: { value: 2 }});

    fireEvent.change(occasionInput, { target: {value: 'Anniversary'}});

    fireEvent.click(submit);

    expect(screen.getByText("Booking Confirmed!")).toBeInTheDocument();


}
);