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
  showHobbies: boolean;

  users: string[] = ["Gustavo", "Raúl", "Edgar", "Marcos", "Anthony"];
  activated: boolean = false;

  constructor() {
    console.log("Constructor working...");
    this.name = "Gustavo ORDOÑO POMA";
    this.email = "gordono@unsa.edu.pe";
    this.webpage = "https://www.unsa.edu.pe";
    this.hobbies = ["Programación", "Videojuegos"]
    this.showHobbies = false;
  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }

  newHobby(hobby: any) {
    if(!hobby.value.trim()) {return false;}

    this.hobbies.push(hobby.value);
    hobby.value = "";
    return false;
  }

  deleteUser(user: string) {
    for(let i = 0; i < this.users.length; i++) {
      if(user === this.users[i]) {
        this.users.splice(i, 1);
      }
    }
  }
}
