import { EatWellPage } from './app.po';

describe('eat-well App', () => {
  let page: EatWellPage;

  beforeEach(() => {
    page = new EatWellPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
