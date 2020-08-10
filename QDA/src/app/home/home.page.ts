import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private _opened: boolean = true;
  private _backdrop: boolean = false;

  constructor() {}  
 
  private _toggleSidebar() {
    this._opened = !this._opened;
  }

}
