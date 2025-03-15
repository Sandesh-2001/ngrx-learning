import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../state/counter.actions';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter-home',
  imports: [AsyncPipe],
  templateUrl: './counter-home.component.html',
  styleUrl: './counter-home.component.css',
})
export class CounterHomeComponent {
  count$!: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
    console.log(
      'count is:',
      this.count$.subscribe((data) => console.log)
    );
    // TODO: Connect `this.count$` stream to the current store `count` state
  }

  increment() {
    this.store.dispatch(increment());
    // TODO: Dispatch an increment action
  }

  decrement() {
    this.store.dispatch(decrement());
    // TODO: Dispatch a decrement action
  }

  reset() {
    this.store.dispatch(reset());
    // TODO: Dispatch a reset action
  }
}
