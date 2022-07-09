import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

    let toggle = document.querySelector(".toggle") as HTMLElement;
    let container = document.querySelector(".container-nav") as HTMLElement;

    toggle.addEventListener("click", () => {
      
      container.classList.toggle("close");

    })

  }

}
