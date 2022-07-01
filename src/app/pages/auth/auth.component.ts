import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Observable, fromEvent, merge } from 'rxjs';





import { Usuario } from './../../models/usuario';
import { RegisterService } from 'src/app/services/register.service';
import { DisplayMessage, GenericValidator, ValidationMessages } from 'src/app/utils/generic-form-validation';
import { CustomValidators } from 'ng2-validation';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[] = [];

  errors: any[] = [];
  isLoginSucess: boolean;
  isRegisterSucess: boolean;

  cadastroForm: FormGroup;
  loginForm: FormGroup;
  usuario: Usuario;

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};


  constructor(
    private fb: FormBuilder,
    private contaService: RegisterService,
    private router: Router,
  ) {

    this.validationMessages = {
      username: {
        required: 'Informe o username',
        username: 'Username inválido',
        min: 'Minimo de 6 caracteres',
      },
      name: {
        required: 'Informe o nome',
        name: 'Nome inválido',
        min: 'Minimo de 6 caracteres',
      },
      email: {
        required: 'Informe o e-mail',
        email: 'Email inválido'
      },
      password: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
      },
      cpf: {
        required: 'Informe seu CPF',
        rangeLength: 'O cpf deve conter 11 caracteres',
        min: 'Minimo de 11 caracteres',
      },
    };

    this.genericValidator = new GenericValidator(this.validationMessages);


  }




  ngOnInit(): void {

    let senha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])]);

    this.cadastroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: senha,
      username: ['', [Validators.required]],
      cpf: ['', [Validators.required, CustomValidators.min([11])]],
      name: ['', [Validators.required]],
    });

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, CustomValidators.rangeLength([6, 15])]]
    });

    setTimeout(() => {
      this.loginInicialize();
    }, 1000);

  }
  ngAfterViewInit(): void {

    let controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.cadastroForm);
    });

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.loginForm);
    });



  };


  loginInicialize(): void {
    let sign_in_btn = document.querySelector("#sign-in-btn") as HTMLElement;
    let sign_up_btn = document.querySelector("#sign-up-btn") as HTMLElement;
    let container = document.querySelector(".container") as HTMLElement;

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });


  };

  RegisterClear() {
    this.cadastroForm.reset();
    this.loginForm.reset();
    this.errors = [];

  }


  adicionarConta() {
    if (this.loginForm.dirty && this.loginForm.valid) {

      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);

      this.contaService.registrarUsuario(this.usuario)
        .subscribe(
          sucesso => { this.processarSucesso(sucesso) },
          falha => { this.processarFalha(falha) }
        );
    }
  }

  processarSucesso(response: any) {
    this.cadastroForm.reset();
    this.errors = [];

    this.contaService.LocalStorage.salvarDadosLocaisUsuario(response);
    if (response != this.errors) {
      this.isRegisterSucess = true;
    }

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 3000);


  }
  processarLoginSucesso(response: any) {
    this.cadastroForm.reset();
    this.errors = [];

    this.contaService.LocalStorage.salvarDadosLocaisUsuario(response);
    if (response != this.errors) {
      this.isLoginSucess = true;
    }

    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 3000);
  }

  processarFalha(fail: any) {

    this.errors = fail.error.errors;
  }

  login() {
    if (this.loginForm.dirty && this.loginForm.valid) {

      this.usuario = Object.assign({}, this.usuario, this.loginForm.value);

      this.contaService.loginUsuario(this.usuario)
        .subscribe(
          sucesso => { this.processarLoginSucesso(sucesso) },
          falha => { this.processarFalha(falha) },
        );
    }
  }

}
