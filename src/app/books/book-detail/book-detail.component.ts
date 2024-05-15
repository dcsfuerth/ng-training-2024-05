import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../book-data.service';
import { Book } from '../book.interface';

@Component({
  selector: 'book-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss',
})
export class BookDetailComponent {
  isbn: string = '';
  book: Book | null = null;

  constructor(
    private route: ActivatedRoute,
    public bookDataService: BookDataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log('1', params['isbn']);
      this.isbn = params['isbn'];

      this.bookDataService.getBookByIsbn(this.isbn).subscribe((book) => {
        this.book = book;
      });
    });
  }
}
