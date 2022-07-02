import { LocalStorageUtils } from './../utils/localstorage';
import { HttpErrorResponse, HttpHeaders } from "@angular/common/http"
import { throwError } from "rxjs";


export abstract class BaseService {

    public LocalStorage = new LocalStorageUtils();
    
    protected UrlServiceV1: string = "https://api-velozlab.herokuapp.com/"

    protected ObterHeaderJson() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }

    protected extractData(response: any) {
        return response || {};
    }

    protected serviceError(response: Response | any) {
        let customError: string[] = [];

        if (response instanceof HttpErrorResponse) {
            if (response.statusText === "Unknown Error") {
                customError.push("Ocorreu um errro desconhecido");
                response.error.errors = customError;
            }
        }
        console.error(response);
        return throwError(response);

    }

}