import { TestBed, inject } from '@angular/core/testing';
import { GiphyService } from './giphy.service';
import { Giphy } from './giphy.model';
import { LocalStorageService } from 'ng2-webstorage';
import { HttpModule, ConnectionBackend } from '@angular/http';

describe('GiphyService', () => {
  //let service: GiphyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [GiphyService, LocalStorageService, ConnectionBackend ]
    });

    var test: LocalStorageService = TestBed.get(LocalStorageService);
    spyOn(test, 'store').and.callFake(fakeSave);
  });
  
/*
  beforeEach(() => { 
    service = new AuthService();
    component = new LoginComponent(service);
  });

  afterEach(() => { 
    service = null;
    component = null;
  });
  */
  function fakeSave() {

  }
  
  it('should be created', inject([GiphyService], (service: GiphyService) => {    
    expect(service).toBeTruthy();
  }));

  it('should create empty savedGiphies onInit', inject([GiphyService], (service: GiphyService) => {
    var giphies = service.getSavedGiphies();
    expect(giphies.length).toBe(0);
  }));

  it('should add a giphy and getSavedGiphies', inject([GiphyService], (service: GiphyService) => {
    var giphy: Giphy = { imageUrl: "bity", caption: "a", clickCount: 0, tags:[]}
    service.add(giphy);
    var giphies = service.getSavedGiphies();
    expect(giphies[giphies.length-1]).toBe(giphy);
  }));


  it('should clear giphies', inject([GiphyService], (service: GiphyService) => {
    var giphy: Giphy = { imageUrl: "bity", caption: "a", clickCount: 0, tags:[]}
    service.add(giphy);
    service.clear();        
    var giphies = service.getSavedGiphies();
    expect(giphies.length).toBe(0);
  }));

  it('should delete a giphy', inject([GiphyService], (service: GiphyService) => {
    var giphy: Giphy = { imageUrl: "bity", caption: "del", clickCount: 0, tags:[]}    
    var giphies = service.getSavedGiphies();
    var initCount = giphies.length;
    service.add(giphy);
    service.delete(giphy);
    giphies = service.getSavedGiphies();
    expect(giphies.length).toBe(initCount);
  }));

  it('should edit a giphy', inject([GiphyService], (service: GiphyService) => {
    service.clear();
    var giphy: Giphy = { imageUrl: "bity", caption: "a", clickCount: 0, tags:[]}    
    service.add(giphy);
    
    giphy.clickCount = 1;
    giphy.caption = "b";
    service.edit(giphy);
    var giphies = service.getSavedGiphies();    
    expect(giphies[giphies.length-1]).toBe(giphy);
  }));

  it('should edit giphy tags', inject([GiphyService], (service: GiphyService) => {
    var giphy: Giphy = { imageUrl: "bity", caption: "a", clickCount: 0, tags:[]}    
    service.add(giphy);

    var tags = ["a", "b", "cd"];
    service.editTags(giphy, tags);
    var giphies = service.getSavedGiphies();
    expect(giphies[giphies.length-1].tags).toBe(tags);
  }));

  /*
  it('should save to localStorage', inject([GiphyService], (service: GiphyService) => {
    var giphy: Giphy = { imageUrl: "bity", caption: "a", clickCount: 0, tags:[]}    

    spyOn(LocalStorageService, 'store').and.returnValue([]);    
    service.add(giphy);
    expect(LocalStorageService.store).toHaveBeenCalled();
  }));
*/

});
