import { browser, element, by } from 'protractor';

export class Ng2PromosportPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pm-root h1')).getText();
  }
}
