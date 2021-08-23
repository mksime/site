import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Projeto } from '../models/projeto';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class ProjetoService {
  private apiUrl = 'http://localhost:8000/projetos/';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getProjeto(): Observable<Projeto[]> {
    return this.httpClient.get<Projeto[]>(`${this.apiUrl}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = `Erro do lado do client. Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Erro do lado do servidor. Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
