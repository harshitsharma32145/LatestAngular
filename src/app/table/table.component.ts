import { Component, inject } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { NavbarComponent } from '../cart/home/navbar/navbar.component';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router'; 
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../redux/app.state';
import { increment, decrement } from '../redux/counter.action';
import { addElement, removeElement } from '../redux/counter.action';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule
    ,NavbarComponent
    ,MatIcon,
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent {
  private _snackBar = inject(MatSnackBar);
  constructor(private _router:Router,private store: Store<AppState>) {}

  count$: Observable<number>=new Observable<number>;
   

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  dataSource = ELEMENT_DATA;

  addToCart(element: PeriodicElement) {
this.store.dispatch(addElement({element}))
this.dataSource=this.dataSource.filter(h=>h.position!=element.position)
this.openSnackBar(element.name);
    console.log('Added to cart:', element);
  }
  openSnackBar(message: string, action: string='Undo') {
    this._snackBar.open(message, 'Undo', {
      duration: 2000
    });
  }
}
