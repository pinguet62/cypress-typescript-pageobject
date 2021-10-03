import {openApp} from "./api";

describe("Mixins", () => {
    it("Login fragment", () => {
        openApp()
            .withLoginLink(link => expect(link.text().trim()).to.equal("Sign in"))

            .fillSearch("Pinguet62{enter}")
            .clickOnMenuUsers()
            .clickOnUser(0)

            .withLoginLink(link => expect(link.text().trim()).to.equal("Sign in"))
            .clickOnRepositoriesTab();
    });
});
