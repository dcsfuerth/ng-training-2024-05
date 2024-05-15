import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  constructor() {}

  getBooks() {
    const books = [
      {
        isbn: '12345678',
        title: 'The Great Gatsby',
        price: 7.99,
        coverUrl:
          'https://m.media-amazon.com/images/I/71rUdxFkaCL._SL1500_.jpg',
        rating: 4.5,
      },
      {
        isbn: '23456789',
        title: 'The Da Vinci Code',
        price: 9.99,
        coverUrl:
          'https://m.media-amazon.com/images/I/71Wv+d6oP6L._SL1500_.jpg',
        rating: 4.8,
      },
    ];

    return books;
  }
}
