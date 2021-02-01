export class HeaderMixin {
    withLoginLink(fct: (link: JQuery<HTMLAnchorElement>) => void) {
        cy.get<HTMLAnchorElement>('a.HeaderMenu-link[href^="/login"]').then(fct);
        return this;
    }
}
