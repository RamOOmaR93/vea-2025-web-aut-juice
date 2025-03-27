import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }
  static get userProfileMenuButton() {
    return cy.get("button[aria-label='Go to user profile']");
  }
  static get accountButton() {
    return cy.get("#navbarAccount");
  }

  static get loginButton() {
    return cy.get("#navbarLoginButton");
  }

  static get searchIcon(){
    return cy.get("#searchQuery");
  }

  static get productBox(){
    return cy.get("div.mdc-card")
  }

  static get productBoxContent(){
    return cy.get("[id*='mat-mdc-dialog-']")
  }

  static get searchField(){
  return cy.get("#searchQuery input");
}

}
