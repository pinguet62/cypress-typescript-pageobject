import {IndexPage} from "./index.page";

export function openApp() {
    cy.visit("/");
    return new IndexPage();
}

export * from "./index.page";
export * from "./search-repositories.page";
