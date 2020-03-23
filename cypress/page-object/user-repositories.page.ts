import {RepositoryPage} from "./repository.page";

export class UserRepositoriesPage {

    fillSearch(value: string) {
        cy.get("input#your-repos-filter").type(value);
        cy.url().should("contains", value); // wait
        return this;
    }

    withRepositories(fct: (lis: JQuery<HTMLLIElement>) => void) {
        this.getRepositories().then(fct);
        return this;
    }

    clickOnRepository(index: number) {
        this.getRepositories().find('a').eq(index).click();
        return new RepositoryPage();
    }

    private getRepositories() {
        return cy.get<HTMLLIElement>('ul[data-filterable-for="your-repos-filter"] > li');
    }
}
