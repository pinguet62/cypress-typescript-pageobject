import {openApp} from "../page-object";

describe("Samples", () => {
    it("GitHub", () => {
        openApp()
            .fillSearch("proxy")
            .clickOnSuggestion(0)
            .withTitle(title => expect(title).is.eq('Proxy Configuration'));
    });
});
