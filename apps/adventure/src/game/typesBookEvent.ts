import type { BetType } from 'rgs-requests';

export type BookEvent = { index: number; type: 'finalWin'; amount: number };
export type Bet = BetType<BookEvent>;
export type BookEventOfType<T> = Extract<BookEvent, { type: T }>;
export type BookEventContext = { bookEvents: BookEvent[] };
