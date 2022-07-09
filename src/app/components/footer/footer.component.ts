import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let toggle = document.querySelector(".toggle") as HTMLElement;
    let container = document.querySelector(".container-footer") as HTMLElement;

    toggle.addEventListener("click", () => {
      
      container.classList.toggle("close");

    })
  }

}
