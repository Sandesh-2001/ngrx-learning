import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../books.model';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './book-list.component.html',
})
export class BookListComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();
  constructor() {}
}
