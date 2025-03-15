import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterHomeComponent } from './counter/counter-home/counter-home.component';
import { BookListComponent } from './book-list/book-list-component/book-list.component';
import { BookCollectionComponent } from './book-list/book-collection/book-collection.component';
import { Store } from '@ngrx/store';
import {
  selectBookCollection,
  selectBooks,
} from './book-list/state/books.selectors';
import { BookApiActions, BooksActions } from './book-list/state/books.actions';
import { BooksService } from './book-list/book.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CounterHomeComponent,
    BookListComponent,
    BookCollectionComponent,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ngrx-learnings';
  books$: any;
  collectionBooks$: any;
  constructor(private bookService: BooksService, private store: Store) {
    this.books$ = this.store.select(selectBooks);
    this.collectionBooks$ = this.store.select(selectBookCollection);
  }

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }
  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }
  ngOnInit() {
    this.bookService.getBooks().subscribe((books: any) => {
      console.log('books', books);
      this.store.dispatch(BookApiActions.retrievedBookList({ books }));
    });
  }
}
