import { PixelPlaySitePage } from './app.po';

describe('pixel-play-site App', function() {
  let page: PixelPlaySitePage;

  beforeEach(() => {
    page = new PixelPlaySitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
