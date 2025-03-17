import _ from 'lodash';

import { type BookEventHandlerMap } from 'utils-book';
import type { BookEvent, BookEventContext } from './typesBookEvent';

export const bookEventHandlerMap: BookEventHandlerMap<BookEvent, BookEventContext> = {};
