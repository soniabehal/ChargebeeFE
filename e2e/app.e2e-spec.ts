import { PlansPage } from './app.po';

describe('plans App', () => {
  let page: PlansPage;

  beforeEach(() => {
    page = new PlansPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
