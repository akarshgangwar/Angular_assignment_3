import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment_3';

  toggle=true;
  clicks:any[]=[]
  toggler()
  {

    this.clicks.push(new Date());
    

    this.toggle =!this.toggle
    

  }



}
