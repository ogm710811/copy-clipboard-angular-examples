import { CopyClipboardExamplePage } from './app.po';

describe('copy-clipboard-example App', () => {
  let page: CopyClipboardExamplePage;

  beforeEach(() => {
    page = new CopyClipboardExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
