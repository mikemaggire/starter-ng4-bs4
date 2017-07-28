import { StarterNg4Bs4BisPage } from './app.po';

describe('starter-ng4-bs4-bis App', () => {
  let page: StarterNg4Bs4BisPage;

  beforeEach(() => {
    page = new StarterNg4Bs4BisPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
