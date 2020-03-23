import {openApp} from "../page-object";

describe("Samples", () => {
    it("GitHub", () => {
        openApp()
            .withLoginLink(link => expect(link.text().trim()).to.equal("Sign in"))
            .fillSearch("pinguet62{enter}")
            .clickOnMenuUsers()
            .withUsers(users => expect(users.length).to.be.at.least(1))
            .clickOnUser(0)
            .clickOnRepositoriesTab()
            .fillSearch("cypress-typescript-pageobject")
            .withRepositories(repositories => expect(repositories.length).to.equal(1))
            .clickOnRepository(0);
    });
});
