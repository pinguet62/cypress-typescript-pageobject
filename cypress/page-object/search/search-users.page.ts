import {SearchPage} from "./index";
import {UserPage} from "../user.page";

export class SearchUsersPage extends SearchPage {
    withUsers(fct: (users: JQuery<HTMLDivElement>) => void) {
        this.getUserItems().then(fct);
        return this;
    }

    clickOnUser(index: number) {
        this.getUserItems().eq(index)
            .find("a.mr-1").click();
        return new UserPage();
    }

    private getUserItems() {
        return cy.get<HTMLDivElement>(".user-list > .user-list-item");
    }
}
