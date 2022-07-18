import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment_3';

  toggle=true;

  toggler()
  {
    console.log(this.toggle)

    return this.toggle =!this.toggle

  }



}
