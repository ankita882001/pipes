import { Component } from '@angular/core';
import { Iplayer } from './models/players.interface';
import { cricketers } from './constants/players';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchValue!:string;
   playerCatgeory!:string;


  title = 'pipes';

  playersArr:Array<Iplayer>=cricketers
}
