# Cypress/TypeScript/PageObject template for *e2e testing*

[![GitHub Actions](https://github.com/pinguet62/cypress-typescript-pageobject/workflows/CI/badge.svg?branch=main)](https://github.com/pinguet62/cypress-typescript-pageobject/actions?query=workflow%3ACI+branch%3Amain)

:memo: [Docoumentation](./doc)

Sample:
```typescript
openApp()
    .withLoginLink(link => expect(link.text().trim()).to.equal("Sign in"))
    .fillSearch("Pinguet62{enter}")
    .clickOnMenuUsers()
    .withUsers(users => expect(users.length).to.be.at.least(1))
    .clickOnUser(0)
    .clickOnRepositoriesTab()
    .fillSearch("cypress-typescript-pageobject")
    .withRepositories(repositories => expect(repositories.length).to.equal(1))
    .clickOnRepository(0);
```
