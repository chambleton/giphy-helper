import { AppPage } from './app.po';

describe('giphy-helper App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Giphy Helper');
  });

});
