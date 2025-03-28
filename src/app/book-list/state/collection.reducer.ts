import { createReducer, on } from '@ngrx/store';
import { Book } from '../books.model';
import { BooksActions } from './books.actions';

export const initialState: ReadonlyArray<string> = [];
export const collectionReducer = createReducer(
  initialState,
  on(BooksActions.addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) return state;
    return [...state, bookId];
  }),
  on(BooksActions.removeBook, (state, { bookId }) => {
    return state.filter((id) => id !== bookId);
  })
);
