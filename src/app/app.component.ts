import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [ CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SnakeAngular';
  XItems=[0,1,2,3,4,5,6,7,8,9]
  YItems=[0,1,2,3,4,5,6,7,8,9,10,11,12]
}
