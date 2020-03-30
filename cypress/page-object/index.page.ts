import {HeaderMixin} from "./header.mixin";
import {SearchRepositoriesPage} from "./search";
import {applyMixins} from "../utils";

export class IndexPage {
    fillSearch(text: string) {
        cy.get('input[name="q"]').type(text);
        return new SearchRepositoriesPage();
    }

    withLoginLink(fct: (link: JQuery<HTMLAnchorElement>) => void) {
        cy.get<HTMLAnchorElement>('a.HeaderMenu-link[href^="/login"]').then(fct);
        return this;
    }
}

export interface IndexPage extends HeaderMixin { // eslint-disable-line @typescript-eslint/no-empty-interface
}

applyMixins(IndexPage, [HeaderMixin]);
