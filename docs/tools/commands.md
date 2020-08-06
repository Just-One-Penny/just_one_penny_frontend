# CLI & Scaffolding

## Generators

```Shell
npm run generate
```

Allows you to auto-generate boilerplate code for common parts of your
application, specifically `component`s, and `container`s. You can
also run `npm run generate <part>` to skip the first selection. (e.g. `npm run generate container`)

```Shell
npm run test:generators
```

If you want to test if generators are working fine. It generates components and containers with various settings. It would be usefull if you start customizing the generators for your needs

## Unit testing

```Shell
npm test
```

Tests your application with the unit tests specified in the `**/__tests__/*.ts` files
throughout the application.  
All the `test` commands allow an optional `-- [string]` argument to filter
the tests run by Jest. Useful if you need to run a specific test only.

```Shell
# Run only the Button component tests
npm test -- Button
```

## Linting

```Shell
npm run lint
```

Lints your Typescript and your CSS.

```Shell
npm run lint:fix
```

Lints your code and tries to fix any errors it finds.

## Typescript

```Shell
npm run checkTs
```

Checks your typescript errors
