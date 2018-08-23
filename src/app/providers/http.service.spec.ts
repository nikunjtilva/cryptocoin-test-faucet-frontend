import { TestBed, inject } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpTestingController,HttpClientTestingModule } from '@angular/common/http/testing';
describe('HttpService', () => {
  let httpMock:HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [HttpService]
    });
    httpMock = TestBed.get(HttpTestingController)
  });

  it('should be created', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));
});
