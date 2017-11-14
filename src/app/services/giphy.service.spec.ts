import { TestBed, inject } from '@angular/core/testing';
import { GiphyService } from './giphy.service';
import { Giphy } from './giphy.model';
import { LocalStorageService } from 'ng2-webstorage';
import { HttpModule, ConnectionBackend } from '@angular/http';

describe('GiphyService', () => {
  var localStorageService: LocalStorageService;
  var service: GiphyService;  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [GiphyService, LocalStorageService, ConnectionBackend ]
    });

    localStorageService = TestBed.get(LocalStorageService);
    localStorageService.clear();

    service = TestBed.get(GiphyService);    
  });
  
  afterEach(() => { 
    localStorageService.clear();
  });

  
  it('should be created', () => {    
    expect(service).toBeTruthy();
  });

  it('should create empty savedGiphies onInit', () => {
    var giphies = service.getSavedGiphies();
    expect(giphies.length).toBe(0);
  });

  it('should add a giphy and getSavedGiphies', () => {
    var giphy: Giphy = { imageUrl: "bity", caption: "a", clickCount: 0, tags:[]}
    service.add(giphy);
    var giphies = service.getSavedGiphies();
    expect(giphies[0]).toBe(giphy);
  });

  it('should clear giphies', () => {
    var giphy: Giphy = { imageUrl: "bity", caption: "a", clickCount: 0, tags:[]}
    service.add(giphy);
    service.clear();
    var giphies = service.getSavedGiphies();
    expect(giphies.length).toBe(0);
  });

  it('should delete a giphy', () => {
    var giphy: Giphy = { imageUrl: "bity", caption: "del", clickCount: 0, tags:[]}    
    var giphies = service.getSavedGiphies();
    var initCount = giphies.length;
    service.add(giphy);
    service.delete(giphy);
    giphies = service.getSavedGiphies();
    expect(giphies.length).toBe(initCount);
  });

  it('should edit a giphy', () => {    
    var giphy: Giphy = { imageUrl: "bity", caption: "a", clickCount: 0, tags:[]}    
    service.add(giphy);
    
    giphy.clickCount = 1;
    giphy.caption = "b";
    service.edit(giphy);
    var giphies = service.getSavedGiphies();    
    expect(giphies[0]).toBe(giphy);
  });

  it('should edit giphy tags', () => {
    var giphy: Giphy = { imageUrl: "bity", caption: "a", clickCount: 0, tags:[]}    
    service.add(giphy);

    var tags = ["a", "b", "cd"];
    service.editTags(giphy, tags);
    var giphies = service.getSavedGiphies();
    expect(giphies[0].tags).toBe(tags);
  });
  
  it('should save to localStorage', () => {
    var giphy: Giphy = { imageUrl: "bity", caption: "a", clickCount: 0, tags:[]}    
    service.add(giphy);

    var storage = localStorageService.retrieve("SavedGiphies");   
    var giphies = service.getSavedGiphies();
    expect(storage).toBe(giphies);
  });

});
