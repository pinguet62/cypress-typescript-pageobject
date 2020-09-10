import {SearchRepositoriesPage, SearchUsersPage} from "./index";

export class SearchPage {
    clickOnMenuRepositories() {
        this.clickOnMenuAndWait("repositories");
        return new SearchRepositoriesPage();
    }

    clickOnMenuUsers() {
        this.clickOnMenuAndWait("users");
        return new SearchUsersPage();
    }

    private clickOnMenuAndWait(type: string) {
        cy.get(`a.menu-item[href$='type=${type}']`).click();
        cy.get("span.Progress.is-loading").should("not.exist"); // wait
    }
}
