import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `<h1 class="text-center">Welcome to Angular</h1>
              <h2 class="text-center">Welcome to Techbrothers99</h2>`,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
