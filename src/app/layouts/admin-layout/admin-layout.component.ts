import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  public isclose: boolean;

  constructor() { 
    this.isclose = false;
  }

  ngOnInit(): void {

    let body = document.querySelector('body');
    let sidebar = document.querySelector('nav') as HTMLElement;
    let toggle = document.querySelector(".toggle") as HTMLElement;
    let conteiner = document.querySelector(".container-2") as HTMLElement;
    let modeSwitch = document.querySelector(".toggle-switch") as HTMLElement;
    let modeText = document.querySelector(".mode-text") as HTMLElement;

    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("close");
      conteiner.classList.toggle("close");

    })

  }

}
