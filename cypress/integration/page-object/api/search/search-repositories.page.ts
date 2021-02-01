import {SearchPage} from "./index";

export class SearchRepositoriesPage extends SearchPage {
    withRepositories(fct: (repositories: JQuery<HTMLLIElement>) => void) {
        this.getRepositoryItems().then(fct);
        return this;
    }

    private getRepositoryItems() {
        return cy.get<HTMLLIElement>("ul.repo-list > li.repo-list-item");
    }
}
