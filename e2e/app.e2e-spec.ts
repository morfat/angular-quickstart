import { AngularQuickStartPage } from './app.po';

describe('angular-quick-start App', () => {
  let page: AngularQuickStartPage;

  beforeEach(() => {
    page = new AngularQuickStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
