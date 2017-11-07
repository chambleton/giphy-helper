import { TestBed, inject } from '@angular/core/testing';
import { GiphyService } from './giphy.service';
import { LocalStorageService } from 'ng2-webstorage';
import { HttpModule, ConnectionBackend } from '@angular/http';

describe('GiphyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [GiphyService, LocalStorageService, ConnectionBackend ]
    });
  });

  it('should be created', inject([GiphyService], (service: GiphyService) => {
    expect(service).toBeTruthy();
  }));
});
