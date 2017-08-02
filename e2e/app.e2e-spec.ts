import { MercadoLivrePage } from './app.po';

describe('mercado-livre App', () => {
  let page: MercadoLivrePage;

  beforeEach(() => {
    page = new MercadoLivrePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
