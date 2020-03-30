import {HeaderMixin} from "./header.mixin";
import {UserRepositoriesPage} from "./user-repositories.page";
import {applyMixins} from "../utils";

export class UserPage {
    clickOnRepositoriesTab() {
        cy.get("nav.UnderlineNav-body")
            .find("a").eq(1)
            .click();
        return new UserRepositoriesPage();
    }
}

export interface UserPage extends HeaderMixin { // eslint-disable-line @typescript-eslint/no-empty-interface
}

applyMixins(UserPage, [HeaderMixin]);
