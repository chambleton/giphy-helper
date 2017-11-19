import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('giphy-helper App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Giphy Helper');
  });

  it('should search giphies', () => {
    page.navigateTo();    
    var results = page.searchGiphies("test");
    expect(results.count()).toBeGreaterThan(0);
  });

  it('should add giphies', () => {
    page.navigateTo();
        
    page.addGiphy("test.jpg");
    var resultGiphies = page.getGiphies();
    expect(resultGiphies.count()).toBe(1);
  });
  
  it('should remove giphies', () => {
    page.navigateTo();  
    page.addGiphy("test1.jpg");

    var initialGiphies = page.getGiphies();
    page.removeGiphy();
    
    var resultGiphies = page.getGiphies();
    expect(resultGiphies.count()).toBe(0);
  });
    
  it('should filter giphies', () => {
    page.navigateTo();
        
    page.addGiphy("test 1.jpg");
    page.addGiphy("aa test.jpg");
    page.filterGiphies("aa");
    
    var resultGiphies = page.getGiphies();
    expect(resultGiphies.count()).toBe(1);
  });

  it('should tag giphies', () => {
    page.navigateTo();
        
    page.addGiphy("test.jpg");   
    page.addGiphyTag("aa");

    page.filterGiphies("aa");
    var resultGiphies = page.getGiphies();
    expect(resultGiphies.count()).toBe(1);    
  });

});
