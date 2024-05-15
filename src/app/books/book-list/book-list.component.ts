import { Component, OnInit } from '@angular/core';
import { Book } from '../book.interface';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent implements OnInit {
  books: Array<Book> = [
    {
      isbn: '12345678',
      title: 'The Great Gatsby',
      price: 7.99,
      coverUrl: 'https://m.media-amazon.com/images/I/71rUdxFkaCL._SL1500_.jpg',
    },
    {
      isbn: '23456789',
      title: 'The Da Vinci Code',
      price: 9.99,
      coverUrl: 'https://m.media-amazon.com/images/I/71Wv+d6oP6L._SL1500_.jpg',
    },
  ];

  coverIsVisible = true;
  searchTerm = '';

  constructor() {
    console.log('BookListComponent created!', new Date().getTime());
  }

  ngOnInit(): void {
    console.log('ngOnInit', new Date().getTime());
  }

  toggleCover() {
    this.coverIsVisible = !this.coverIsVisible;
  }

  getBookId(_index: number, book: Book) {
    return book.isbn;
  }
}
