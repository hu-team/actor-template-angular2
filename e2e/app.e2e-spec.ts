import { ActorTPage } from './app.po';

describe('actor-t App', () => {
  let page: ActorTPage;

  beforeEach(() => {
    page = new ActorTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
