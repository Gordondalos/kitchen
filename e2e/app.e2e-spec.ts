import { AngularToSimfonyPage } from './app.po';

describe('angular-to-simfony App', () => {
  let page: AngularToSimfonyPage;

  beforeEach(() => {
    page = new AngularToSimfonyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
