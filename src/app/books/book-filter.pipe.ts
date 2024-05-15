import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book.interface';

@Pipe({
  name: 'bookFilter',
})
export class BookFilterPipe implements PipeTransform {
  // of books | bookFilter: searchTerm

  transform(booklist: Book[], searchTerm: string = ''): Book[] {
    const filterValue = (searchTerm || '').toLowerCase();
    const books = booklist || [];

    const result = books.filter((book) =>
      book.title.toLowerCase().includes(filterValue)
    );

    return result;
  }
}
