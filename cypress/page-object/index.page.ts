import {SearchRepositoriesPage} from "./search-repositories.page";

export class IndexPage {
    fillSearch(text: string) {
        cy.get('input[name=q]').type(text);
        return new SearchRepositoriesPage();
    }

    withLoginLink(fct: (a: JQuery<HTMLAnchorElement>) => void) {
        cy.get<HTMLAnchorElement>('a[href="/login"]').then(fct);
        return this;
    }
}
