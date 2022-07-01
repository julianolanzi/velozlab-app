import { Observable } from 'rxjs';
import { Usuario } from './../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { catchError, map } from "rxjs/operators";
import { BaseService } from './base.service';


@Injectable()
export class RegisterService extends BaseService {

    constructor(private http: HttpClient) { super(); }

    registrarUsuario(usuario: Usuario): Observable<Usuario> {
        let response = this.http
            .post(this.UrlServiceV1 + 'user', usuario, this.ObterHeaderJson())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError));

        return response;

    }
    loginUsuario(usuario: Usuario): Observable<Usuario> {
        let response = this.http
            .post(this.UrlServiceV1 + 'user/login', usuario, this.ObterHeaderJson())
            .pipe(map(this.extractData),
                catchError(this.serviceError));

        return response;
    }
}