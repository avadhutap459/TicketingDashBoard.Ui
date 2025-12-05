import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { userActions } from '../../stores/action';

@Component({
  selector: 'app-component-one',
  standalone: false,
  templateUrl: './component-one.html',
  styleUrl: './component-one.css',
})
export class ComponentOne implements OnInit {

  constructor(private store: Store){

  }
  ngOnInit(): void {

    
  }

  getUser(){
    debugger
    let userId : number = 101;
      this.store.dispatch(userActions.user({ userId }))
  }

}
