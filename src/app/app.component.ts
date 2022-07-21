import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  name: string;
  email; // :string
  webpage: string;
  hobbies: string[];
  displayHobbies: boolean;

  constructor() {
    console.log("Constructor working...");
    this.name = "Gustavo ORDOÑO POMA";
    this.email = "gordono@unsa.edu.pe";
    this.webpage = "https://www.unsa.edu.pe";
    this.hobbies = ["Programación", "Videojuegos"]
    this.displayHobbies = false;
  }

  showHobbies() {
    return true;
  }
}
