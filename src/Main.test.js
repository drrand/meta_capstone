import Main from "./Main";
import BookingPage from "./BookingPage";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "./Main";
import { screen, render, getByLabelText, fireEvent, getAllByRole, getByRole } from "@testing-library/react"
import AvailableTimes from "./AvailableTimes";

jest.mock("react-router", () => ({
  __esModule: true,
  useNavigate: jest.fn(),
  Route: () => null,
  Routes: () => null,
}));


test("initalizeTimes returns a non-empty array of available booking times", () => {
  const date = new Date();
  const timesArray = initializeTimes(date);
  expect(timesArray.length).toBeGreaterThan(0);
})

test("Update times updates the list of times down in 'Choose time' when the date changes", () => {
  
  const formState =
    {
    "resDate": "2025-08-20",
    "resTime": "17:30",
    "guestNum": 1,
    "occasion": "Birthday"
  }

  const availableTimes = ['16:30', '17:00', '17:30'];
  
  render(
      <BookingForm formState={formState} availableTimes={availableTimes} />
 );

  const datePicker = screen.getByLabelText('Choose date');
  const timePicker = screen.getByLabelText('Choose time');
  fireEvent('click', timePicker);
  const timeOptions1 = screen.getAllByRole('option');
  datePicker.value = '2025-08-30';
  fireEvent('click', timePicker);
  const timeOptions2 = screen.getAllByRole('option');
  expect(timeOptions1).not.toEqual(timeOptions2);
});

// test("updateTimes returns a different set of times for a new date", () => {
//   const initialTimes = updateTimes({ type: 'initial_load', date: new Date() });
//   const newTimes = updateTimes({ type: 'update_times', date: new Date('2025-08-30') });
//   expect(initialTimes).not.toEqual(newTimes);
// });

