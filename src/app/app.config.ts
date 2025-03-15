import {
  ApplicationConfig,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore, StoreModule } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { counterReducer } from './counter/state/counter.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';
import { booksReducer } from './book-list/state/books.reducer';
import { collectionReducer } from './book-list/state/collection.reducer';
import { provideHttpClient } from '@angular/common/http';

export function localStorageReducer(reducer: any) {
  return localStorageSync({
    keys: ['count', 'books', 'collection'],
    rehydrate: true,
  })(reducer);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore(
      {
        count: counterReducer,
        books: booksReducer,
        collection: collectionReducer,
      },
      { metaReducers: [localStorageReducer] }
    ),
    provideStoreDevtools({
      logOnly: !isDevMode(),
    }),
  ],
  // imports: [StoreModule.forRoot(counterReducer)],
};
