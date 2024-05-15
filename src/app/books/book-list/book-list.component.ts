import { Component, OnInit } from '@angular/core';
import { Book } from '../book.interface';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent implements OnInit {
  books: Array<Book> = [];

  coverIsVisible = true;
  searchTerm = '';

  constructor(public bookDataService: BookDataService) {
    console.log('BookListComponent created!', new Date().getTime());
  }

  ngOnInit(): void {
    console.log('ngOnInit', new Date().getTime());
    this.books = this.bookDataService.getBooks();
  }

  toggleCover() {
    this.coverIsVisible = !this.coverIsVisible;
  }

  getBookId(_index: number, book: Book) {
    return book.isbn;
  }

  increaseRating(isbn: string) {
    const book = this.books.find((book) => book.isbn === isbn);
    if (book) {
      const newRating = parseFloat((book.rating + 0.1).toFixed(1));
      book.rating = Math.max(1, Math.min(5, newRating));
    }
  }
}
