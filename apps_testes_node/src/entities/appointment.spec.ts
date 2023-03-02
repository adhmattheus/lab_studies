import { expect, test } from 'vitest'
import { getFutureDate } from '../testes/utils/get-future-date';
import { Appointment } from './appointment'

test('create an appointment', () => {
  const startAt = getFutureDate('2022-08-10')
  const endsAt = getFutureDate('2022-08-11')

  const appointment = new Appointment({
    customer: 'John Doe',
    startAt,
    endsAt,
  })

  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual('John Doe');
});

test('cannot create an appointment with end date before start date', () => {
  const startAt = getFutureDate('2022-08-10')
  const endsAt = getFutureDate('2022-08-09')

  expect(() => {
    return new Appointment({
      customer: 'John Doe',
      startAt,
      endsAt,
    })
  }).toThrow()
});

test('cannot create an appointment with start date before now', () => {
  const startAt = new Date();
  const endsAt = new Date();

  startAt.setDate(startAt.getDate() - 1)
  endsAt.setDate(endsAt.getDate() + 3)

  expect(() => {
    return new Appointment({
      customer: 'John Doe',
      startAt,
      endsAt,
    })
  }).toThrow()
});