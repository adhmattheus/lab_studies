import { areIntervalsOverlapping } from "date-fns";
import { Appointment } from "../../entities/appointment";
import { AppointmentsRepository } from "../appointments-repository";

export class inMemoryAppointmentsRepository implements AppointmentsRepository {
  public items: Appointment[] = [];

  async create(appointment: Appointment): Promise<void> {
    this.items.push(appointment)
  }

  async findOverLappingAppointment(startAt: Date, endAt: Date): Promise<Appointment | null> {
    const overLappingAppointment = this.items.find(appointment => {
      return areIntervalsOverlapping(
        { start: startAt, end: endAt },
        { start: appointment.startAt, end: appointment.endsAt },
        { inclusive: true }
      )
    })
    if (!overLappingAppointment) {
      return null
    }
    return overLappingAppointment
  }
}