import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let sign_in_btn = document.querySelector("#sign-in-btn") as HTMLElement;
    let sign_up_btn = document.querySelector("#sign-up-btn") as HTMLElement;
    let container = document.querySelector(".container") as HTMLElement;

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }

}
