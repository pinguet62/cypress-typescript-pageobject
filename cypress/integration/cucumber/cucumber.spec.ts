import {givenIAmNotLogged} from "./api";

describe("Cucumber", () => {
    it("Test", () => {
        givenIAmNotLogged()
            .whenISearchTheUser("Pinguet62{enter}")
            .thenISeeHimInList();
    });
});
