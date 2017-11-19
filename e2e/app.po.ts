import { browser, by, element, Key } from 'protractor';

export class AppPage {
  public searchResults: any[] = [];

  navigateTo() {
    return browser.get('/');
  }

  getTitle() {    
    return element(by.className('title')).getText();
  }  

  searchGiphies(searchText: string): any {
    
    element(by.className('search-nav')).click();
    // click search pnl, input str, click, return results
    var searchEdit = element(by.className('search-text'));
    searchEdit.sendKeys(searchText);
    element(by.className('search-btn')).click();    
    
    browser.wait(() => {
        return element.all(by.className('search-result')).first().isDisplayed();
    }, 5000);

    return element.all(by.className('search-result'));
  }

  getGiphies(): any {    
    return element.all(by.className('giphy-card'));
  }
  
  addGiphy(imageUrl: string) {
    // pastes into edit box, clicks to add to our list
    var pasteInput = element(by.className('paste-input'));
    pasteInput.sendKeys(imageUrl);
    pasteInput.sendKeys(Key.ENTER);

    browser.wait(() => {
        return element.all(by.className('giphy-card')).first().isDisplayed();
    }, 5000);
  }    

  removeGiphy() {
    element(by.className('remove-btn')).click();
  }

  addGiphyTag(tag: string) {    
    element(by.className('add-tag-btn')).click();
    element(by.className('tag-input')).sendKeys(tag);
    element(by.className('tag-input')).sendKeys(Key.ENTER);
  }

  filterGiphies(filterText: string) {
    var filterEdit = element(by.className('filter-input'));
    filterEdit.sendKeys(filterText);
    filterEdit.sendKeys(Key.ENTER);
  }

}
