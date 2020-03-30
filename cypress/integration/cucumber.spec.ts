import {givenIAmNotLogged} from "../cucumber";

describe("Cucumber", () => {
    it("Test", () => {
        givenIAmNotLogged()
            .whenISearchTheUser("Pinguet62{enter}")
            .thenISeeHimInList();
    });
});
