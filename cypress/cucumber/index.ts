import {IndexPage} from "../page-object/index.page";
import {SearchUsersPage} from "../page-object/search";
import {openApp} from "../page-object";

export function givenIAmNotLogged() {
    return openApp();
}

declare module "../page-object/index.page" {
    interface IndexPage {
        whenISearchTheUser(value: string): SearchUsersPage;
    }
}

IndexPage.prototype.whenISearchTheUser = function (value: string) {
    return this.fillSearch(value)
        .clickOnMenuUsers();
}

declare module "../page-object/search/search-users.page" {
    interface SearchUsersPage {
        thenISeeHimInList(): SearchUsersPage;
    }
}

SearchUsersPage.prototype.thenISeeHimInList = function () {
    return this.withUsers(users => expect(users.length).to.be.least(1));
}
