import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../books.model';

@Component({
  selector: 'app-book-collection',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './book-collection.component.html',
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();
  constructor() {}
}
