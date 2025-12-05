import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetUserStateInterface } from '../../type/GetUserState.interface';
import { selectCurrentUser } from '../../stores/reducer';

@Component({
  selector: 'app-component-two',
  standalone: false,
  templateUrl: './component-two.html',
  styleUrl: './component-two.css'
})
export class ComponentTwo implements OnInit{

  constructor(private _store$: Store<GetUserStateInterface>){}

  ngOnInit(): void {
    debugger
    let data =this._store$.select(selectCurrentUser).subscribe(x=> {
          debugger 
    
          x
        })
  }
}
