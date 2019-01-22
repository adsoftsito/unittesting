import { ComputePage } from './app.po';

describe('compute App', () => {
  let page: ComputePage;

  beforeEach(() => {
    page = new ComputePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
