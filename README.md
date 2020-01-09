# Why implement *e2e tests* in *TypeScript* following *Page Object* pattern?

[![GitHub Actions](https://github.com/pinguet62/cypress-typescript-pageobject/workflows/CI/badge.svg?branch=master)](https://github.com/pinguet62/cypress-typescript-pageobject/actions?query=workflow%3ACI+branch%3Amaster)

:information_source: Exemple basé sur Cypress/TypeScript. Cela peut être traduit en Selenium/Java ou tout autre outils/langage.

## Situation

*Lorsque je me connecte, j'arrive sur l'écran d'identification. Lorsque je suis identifié, je suis redirigé vers l'écran d'accueil. Je peux cliquer sur le bouton pour voir mon panier. Je vois ma liste d'articles.*

```javascript
it('Display basket' {
    cy.visit("https://sample.test");
    cy.get('input[name="email"]').type("...");
    cy.get('input[name="password"]').type("...");
    cy.get('input[type="button"]').click();
    cy.get("#bascket").click();
    cy.get('#articles').then(it => expect(it).to.have.length(0));
});
```

Problèmes :
* n'est pas très lisible
* duplication éventuelle de code dans chacun des tests (ex : *login*)

## 1ère solution : des fonctions réutilisables

Il y a 4 parties dans le test, correspondant aux 4 opérations : elles peuvent être placées dans une *fonction* :
```javascript
function openApp() {
    cy.visit("https://sample.test");
}

function processLogin(email, password) {
    cy.get('input[name="email"]').type("...");
    cy.get('input[name="password"]').type("...");
    cy.get('input[type="button"]').click();
}

function clickOnBasketButton() {
    cy.get("#bascket").click();
}

function withArticles(callback) {
    cy.get('#articles').then(callback);
}
```

Ces fonctions peuvent ainsi être réutilisées :
```javascript
it('Display basket' {
    openApp();
    processLogin("...", "...");
    clickOnBasketButton();
    withArticles(it => expect(it).to.have.length(0));
});
```

## Le besoin du *Page Object*

Problème : on se retrouve avec un tas de fonctions sans réelle organisation.

Le pattern a pour but de modéliser :
* 1 page par 1 classe ;
* 1 action par 1 méthode.

Exemple de documentation : https://martinfowler.com/bliki/PageObject.html

```javascript
function opennApp() {
    cy.visit("https://sample.test");
    return new LoginPage();
}

class LoginPage {
    fillEmail(value) {
        cy.get('input[name="email"]').type("...");
        return this;
    }
    fillPassword(value) {
        cy.get('input[name="password"]').type("...");
        return this;
    }
    clickOnSubmit() {
        cy.get('input[type="button"]').click();
        return new HomePage();
    }
}

class HomePage {
    clickOnBasketButton() {
        cy.get("#bascket").click();
        return new BasketPage();
    }
}

class BasketPage {
    withArticles(callback) {
        cy.get('#articles').then(callback);
    }
}
```

Ainsi on peut enchaîner les actions :
```javascript
it('Display basket' {
    openApp()
        .fillEmail("...")
        .fillPassword("...")
        .clickOnSubmit()
        .clickOnBasketButton()
        .withArticles(it => expect(it).to.have.length(0));
});
```

## Le besoin de *TypeScript*

Problème : L'utilisation de fonctions ou même du Page Object en JavaScript, ne contraint pas l'ordre des appels. Échanger 2 lignes de code ne créera une erreur qu'à l'exécution :
```javascript
    openApp();
    clickOnBasketButton(); // CypressError: Timed out retrying: Expected to find element 'bascket' to have text '0', but never found it
    // ...
});
it('Display basket' {
    openApp()
        .clickOnBasketButton() // TypeError: (intermediate value).clickOnBasketButton is not a function
        // ...
});
```

La solution est d'utiliser un langage typé, afin d'être averti par le compilateur (donc avant exécution) : TypeScript
```javascript
it('Display basket' {
    openApp()
        .clickOnBasketButton() // Property 'clickOnBasketButton' does not exist on type 'LoginPage'.
    // ...
});
```

Si demain une modification du workflow, ou la suppression d'un bouton intervient sur la page, il faudra mettre à jour les classes du pattern Page Object, et le compilateur montrera quels sont les tests à mettre à jour.
