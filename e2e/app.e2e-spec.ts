import { PersonalSiteNewPage } from './app.po';

describe('personal-site-new App', () => {
  let page: PersonalSiteNewPage;

  beforeEach(() => {
    page = new PersonalSiteNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
