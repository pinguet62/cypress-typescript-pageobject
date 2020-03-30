# Frequently Asked Questions

There are common problems with this pattern, because of design.

## Circular dependency

* [use `circular-dependency-plugin` Webpack plugin](../cypress/webpack.config.js)
* use `internal.ts` file who `import` all concerned components, and all other components will have to use this `internal.ts` file to import its dependencies
* ...

## Code duplication

* use **base class** with shared actions/methods - *limited but easy*
* use [mixin](https://www.typescriptlang.org/docs/handbook/mixins.html) - *more efficient*
