import { Angular2AdvancedPage } from './app.po';

describe('angular2-advanced App', function() {
  let page: Angular2AdvancedPage;

  beforeEach(() => {
    page = new Angular2AdvancedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
