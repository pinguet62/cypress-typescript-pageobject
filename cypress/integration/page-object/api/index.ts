import {IndexPage} from "./index.page";

export function openApp() {
    cy.visit("/");
    return new IndexPage();
}
