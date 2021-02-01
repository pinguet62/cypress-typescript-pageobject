# Cucumber/Gherkin *like*

## What?

```gherkin
Given I am not logged
When I search the user
Then I see him in list
```

```typescript
 givenIAmNotLogged()
.whenISearchTheUser("Pinguet62{enter}")
.thenISeeHimInList();
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
