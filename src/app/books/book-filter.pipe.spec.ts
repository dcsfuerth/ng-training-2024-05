import { BookFilterPipe } from './book-filter.pipe';
import { Book } from './book.interface';

const emptyBook: Book = {
  title: '',
  coverUrl: '',
  isbn: '',
  price: 0,
  rating: 0,
};
const book1: Book = { ...emptyBook, title: 'Peters Angularkurs' };
const book2: Book = { ...emptyBook, title: 'Peters NestJS-Kurs' };
const allBooks = [book1, book2];

describe('BookFilterPipe', () => {
  let pipe: BookFilterPipe;

  beforeAll(() => {
    pipe = new BookFilterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should work on an empty booklist', () => {
    let result = pipe.transform([], 'irgendwas');
    expect(result).toEqual([]);
  });

  it('should work on an empty booklist', () => {
    let result = pipe.transform([], undefined);
    expect(result).toEqual([]);
  });

  it('should ignore upper/lowercase', () => {
    let result = pipe.transform(allBooks, 'NESTJS');
    expect(result).toEqual([book2]);
  });
});
