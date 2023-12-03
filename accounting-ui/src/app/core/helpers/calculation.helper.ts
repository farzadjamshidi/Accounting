import { Injectable } from "@angular/core";
import { Event, EventStatusEnum } from "../models/event.model";

@Injectable({
  providedIn: "root"
})
export class CalculationHelper
{
  event(event: Event): { [key: string]: number; }
  {
    if (event.status == EventStatusEnum.Completed) return {};

    const result: { [key: string]: number; } = {};

    event.expenses.forEach(expense =>
    {
      expense.payers.forEach(payer =>
      {
        result[payer.userId] = (result[payer.userId] ? result[payer.userId] : 0) + payer.price;
      });
      expense.consumers.forEach(consumer =>
      {
        result[consumer.userId] = (result[consumer.userId] ? result[consumer.userId] : 0) - consumer.price;
      });
    });

    return result;
  }

  events(events: Event[]): { [key: string]: number; }
  {

    const result: { [key: string]: number; } = {};

    events.forEach(event =>
    {
      if (event.status != EventStatusEnum.Completed)
      {
        event.expenses.forEach(expense =>
        {
          expense.payers.forEach(payer =>
          {
            result[payer.userId] = (result[payer.userId] ? result[payer.userId] : 0) + payer.price;
          });
          expense.consumers.forEach(consumer =>
          {
            result[consumer.userId] = (result[consumer.userId] ? result[consumer.userId] : 0) - consumer.price;
          });
        });
      }

    });

    return result;
  }
}
