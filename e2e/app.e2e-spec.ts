import { Gng2Page } from './app.po';

describe('gng2 App', function() {
  let page: Gng2Page;

  beforeEach(() => {
    page = new Gng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
