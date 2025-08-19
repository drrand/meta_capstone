import { fireEvent, screen, render, waitFor } from '@testing-library/react';
import Main from './Main';
import { MemoryRouter } from 'react-router';
import 'jest-localstorage-mock';

const testDate = "2049-12-12";
const testTime = "21:00";
const testGuests = "2";
const testOccasion = "Anniversary";

beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
})


test('Submit writes to local storage', async () => {

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


    fireEvent.change(dateInput, { target: { value: testDate } });
    fireEvent.change(timeInput, { target: { value: testTime } });
    fireEvent.change(guestsInput, { target: { value: testGuests } });
    fireEvent.change(occasionInput, { target: { value: testOccasion } });

    fireEvent.click(submit);

    await waitFor(() => {

        expect(localStorage.setItem).toHaveBeenCalledWith('formData', JSON.stringify({
            resDate: testDate,
            resTime: testTime,
            guestNum: testGuests,
            occasion: testOccasion
        }));
    })
});

test('Read from Local Storage', async () => {

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


    fireEvent.change(dateInput, { target: { value: testDate } });
    fireEvent.change(timeInput, { target: { value: testTime } });
    fireEvent.change(guestsInput, { target: { value: testGuests } });
    fireEvent.change(occasionInput, { target: { value: testOccasion } });

    fireEvent.click(submit);

        const confElements = await screen.findAllByRole("cell");
        const confData = confElements.map(el => el.textContent);

        console.log(confData);

        // expect(confData[0]).toBe(testDate);
        // expect(confData[1]).toBe(testTime);
        // expect(confData[2]).toBe(testGuests);
        // expect(confData[3]).toBe(testOccasion);

});


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

        fireEvent.change(dateInput, { target: { value: '2049-12-12' } });

        fireEvent.change(timeInput, { target: { value: '23:00' } });

        fireEvent.change(guestsInput, { target: { value: 2 } });

        fireEvent.change(occasionInput, { target: { value: 'Anniversary' } });

        fireEvent.click(submit);

        expect(screen.getByText("Booking Confirmed!")).toBeInTheDocument();


    }
    );