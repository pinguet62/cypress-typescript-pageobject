import {UserRepositoriesPage} from "./user-repositories.page";

export class UserPage {
    clickOnRepositoriesTab() {
        cy.get("nav.UnderlineNav-body")
            .find("a").eq(1)
            .click();
        return new UserRepositoriesPage();
    }
}
