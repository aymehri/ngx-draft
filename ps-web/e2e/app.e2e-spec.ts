import { Ng2PromosportPage } from './app.po';

describe('ng2-promosport App', () => {
  let page: Ng2PromosportPage;

  beforeEach(() => {
    page = new Ng2PromosportPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pm works!');
  });
});
