import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Curso } from "../models/curso";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class CursosService {
  private apiUrl = 'http://localhost:8000/cursos/';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getCurso(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(`${this.apiUrl}`)
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
