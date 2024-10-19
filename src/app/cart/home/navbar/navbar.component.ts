import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';
import { AppState } from '../../../redux/app.state';
import { Store } from '@ngrx/store';
import { selectTableData } from '../../../redux/counter.selector';
import { Observable, map } from 'rxjs';
import { PeriodicElement } from '../../../redux/counter.reducer';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,
    MatToolbarModule,
    MatButtonModule, 
    MatIconModule,
    MatBadgeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',

})
export class NavbarComponent {
  badgeCount:number=0
  tableData$: Observable<any[]> =new Observable<PeriodicElement[]>
  constructor(private route: Router,private store: Store<AppState>) {
    debugger 
    this.tableData$! = this.store.select(selectTableData);
    
    this.tableData$.subscribe((data:any)=>{
      this.badgeCount=data[0].tableData.length
      console.log(data,data[0].tableData.length)
    })
  }
  navigateToFavorite(route:string) {
    this.route.navigate([route])
  }
   
}
