import { Ng4ProjectPage } from './app.po';

describe('ng4-project App', () => {
  let page: Ng4ProjectPage;

  beforeEach(() => {
    page = new Ng4ProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
