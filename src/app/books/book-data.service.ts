import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book.interface';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/books');
  }

  getBooksNew(): Promise<Book[]> {
    return firstValueFrom(this.http.get<Book[]>('http://localhost:3000/books'));
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>('http://localhost:3000/books/' + isbn);
  }

  // deleteBookByIsbn(isbn: string): Observable<Book> {
  // }
}
