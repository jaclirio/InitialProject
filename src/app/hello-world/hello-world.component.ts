import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent {

  name = 'John';
  font = 'Arial';

  updateName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  getName() {
    return 'LOL!';
  }

  changeFont(event: Event) {
    this.font = (event.target as HTMLSelectElement).value;
  }
}
