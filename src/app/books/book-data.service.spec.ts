import { TestBed } from '@angular/core/testing';

import { BookDataService } from './book-data.service';

describe('BookDataService', () => {
  let bookDataService: BookDataService;
  let mockHttp: any;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
    bookDataService = new BookDataService(mockHttp);
  });

  it('should be created', () => {
    expect(bookDataService).toBeTruthy();
  });

  it('should call http.get with the correct URL', () => {
    let result = bookDataService.getBooks();
    expect(mockHttp.get).toHaveBeenCalledWith('http://localhost:3000/books');
  });
});
