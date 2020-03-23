import {SearchRepositoriesPage, SearchUsersPage} from "./index";

export class SearchPage {
    clickOnMenuRepositories() {
        this.clickOnMenuAndWait("Repositories");
        return new SearchRepositoriesPage();
    }

    clickOnMenuUsers() {
        this.clickOnMenuAndWait("Users");
        return new SearchUsersPage();
    }

    private clickOnMenuAndWait(type: string) {
        cy.get(`a.menu-item[href$='type=${type}']`).click();
        cy.get('span.Progress.is-loading').should('not.exist'); // wait
    }
}
