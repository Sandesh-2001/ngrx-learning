import { createActionGroup, props } from '@ngrx/store';
import { Book } from '../books.model';

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Add book': props<{ bookId: string }>(),
    'Remove book': props<{ bookId: string }>(),
  },
});

export const BookApiActions = createActionGroup({
  source: 'Books Api Actions',
  events: {
    'Retrieved Book List': props<{ books: ReadonlyArray<Book> }>(),
  },
});
