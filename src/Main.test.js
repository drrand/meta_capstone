import { initializeTimes, updateTimes } from "./Main";
import { screen, render, getByLabelText, fireEvent, getAllByRole, getByRole, within } from "@testing-library/react"
import { Routes, Route, MemoryRouter } from "react-router";
import Main from "./Main";

test("initalizeTimes returns a non-empty array of available booking times", () => {
  const date = new Date();
  const timesArray = initializeTimes(date);
  expect(timesArray.length).toBeGreaterThan(0);
})


test("Time options update when date is changed", () => {

  render(
    <MemoryRouter initialEntries={['/Reservations']} >
      <Main />
    </MemoryRouter>
  );

  const dateInput = screen.getByLabelText('Choose date');
  const timeInput = screen.getByLabelText('Choose time');

  const timeOptions1 = within(timeInput).getAllByRole('option');

  fireEvent.change(dateInput, { target: { value: '2025-08-30' } });

  const timeOptions2 = within(timeInput).getAllByRole('option');

  expect(timeOptions1).not.toEqual(timeOptions2)
})