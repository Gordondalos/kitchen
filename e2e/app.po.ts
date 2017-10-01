import { browser, by, element } from 'protractor';

export class AngularToSimfonyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
