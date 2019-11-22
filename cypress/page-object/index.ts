export class SearchSuggestionFragment {
    clickOnSuggestion(index: number) {
        cy.get('.ds-suggestions')
            .find('.ds-suggestion').eq(index)
            .click();
        return new DocsPage(); // eslint-disable-line @typescript-eslint/no-use-before-define
    }
}

export class DocsPage {
    fillSearch(text: string) {
        cy.get('#search-input').type(text);
        return new SearchSuggestionFragment();
    }

    withTitle(fct: (title: string) => void) {
        cy.get('h1.article-title').then(h1 => fct(h1.text()));
    }
}

export function openApp() {
    cy.visit("/");
    return new DocsPage();
}
