import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from "rxjs/operators";
import { Post } from "../models/post";

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private apiUrl = 'http://localhost:8000/blog/';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getPost(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.apiUrl}getposts`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getPostById(id: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.apiUrl}getposts/${id}`)
     .pipe(
       retry(2),
       catchError(this.handleError)
    )
  }

  savePost(post: Post): Observable<Post[]> {
    return this.httpClient.post<Post[]>(`${this.apiUrl}getposts/`, JSON.stringify(post), this.httpOptions)
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
