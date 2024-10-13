import { Component } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store'; 
import { Observable } from 'rxjs';
import { increment, decrement } from '../../redux/counter.action';
import { CommonModule } from '@angular/common';
import { AppState } from '../../redux/app.state';
import { selectCounerState, selectCount } from '../../redux/counter.selector';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  count$: Observable<number>=new Observable<number>;
  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount);
    this.store.select('count').subscribe(count => {
      console.log('Current count:', count);
    });
     // Selecting the count from the store
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}
