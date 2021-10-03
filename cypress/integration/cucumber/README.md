# Cucumber/Gherkin *like*

## What?

```gherkin
Feature: Search user
    Scenario: Found user
        Given I am not logged
        When I search the user
        Then I see him in list
```

```typescript
describe("Search user", () => {
    it("Found user", () => {
         givenIAmNotLogged()
        .whenISearchTheUser("Pinguet62{enter}")
        .thenISeeHimInList()
    });
});
```

## Why?

Page-Object is a *developer oriented* API, intended for *technical & short scenarios*.

Cucumber & Gherkin is a *functional oriented* API, intended for *simple & full scenarios*.

## How doesn't it work?

Based on [TypeScript Declaration Merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html) concept.
Fill existing Page-Object type with new method regrouping sub-call.

```typescript
IndexPage.prototype.whenISearchTheUser = function (value: string) {
    return this
        .fillSearch(value)
        .clickOnMenuUsers();
}
```
