import { Currency } from "@app/models/Currency";

export type Slot = {
  _id?: string;
  startDate: Date;
  price: number;
  currency?: Currency;
  endDate?: Date;
  note?: string;
};
