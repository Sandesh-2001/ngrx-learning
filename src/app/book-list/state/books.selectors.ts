import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Book } from '../books.model';

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

export const selecteCollectionState =
  createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  selecteCollectionState,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id)!);
  }
);
