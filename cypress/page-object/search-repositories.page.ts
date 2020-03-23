import {UsersSearchPage} from "./search-users.page";

export class SearchRepositoriesPage {
    clickOnMenuUsers() {
        cy.get("a.menu-item[href$='type=Users']").click();
        return new UsersSearchPage();
    }
}
