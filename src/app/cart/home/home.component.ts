import { Component } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store'; 
import { Observable } from 'rxjs';
import { increment, decrement, removeElement } from '../../redux/counter.action';
import { CommonModule } from '@angular/common';
import { AppState } from '../../redux/app.state';
import {  selectTableData } from '../../redux/counter.selector';
import { PeriodicElement } from '../../table/table.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatButtonModule,ToastrModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  count$: Observable<number>=new Observable<number>;

  tableData$: Observable<any[]> =new Observable<PeriodicElement[]>
  constructor(private store: Store<AppState>,private toastr: ToastrService) {
    // this.count$ = this.store.select(selectCount);
    
    this.tableData$ = this.store.select(selectTableData); 
    this.store.select('tableData').subscribe(count => {
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
  deleteElement(position:number){
    this.store.dispatch(removeElement({position}));
    this.toastr.success("Item Deleted Succesfully");

  }
  removeElement(position: number) {
    this.store.dispatch(removeElement({ position }));
}
}
