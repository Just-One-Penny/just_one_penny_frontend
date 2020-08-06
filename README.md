<img width="914" alt="Just One Penny" src="https://share.getcloudapp.com/items/bLuRo0pm/download?utm_source=viewer" align="center">
<br />

<div align="center">
  <a href="https://github.com/react-boilerplate/react-boilerplate-cra-template/actions?query=workflow%3Abuild">
    <img src="https://github.com/react-boilerplate/react-boilerplate-cra-template/workflows/build/badge.svg" alt="Build Status" />
  </a>
  <a href="https://github.com/react-boilerplate/react-boilerplate-cra-template/actions?query=workflow%3Atests">
    <img src="https://github.com/react-boilerplate/react-boilerplate-cra-template/workflows/test/badge.svg" alt="Tests Status" />
  </a>
  <a href="https://github.com/react-boilerplate/react-boilerplate-cra-template/actions?query=workflow%release">
    <img src="https://github.com/react-boilerplate/react-boilerplate-cra-template/workflows/release/badge.svg" alt="Release Status" />
  </a>
</div>

<div align="center">
  <a href="https://coveralls.io/github/react-boilerplate/react-boilerplate-cra-template">
    <img src="https://coveralls.io/repos/github/react-boilerplate/react-boilerplate-cra-template/badge.svg?branch=master" alt="Coverage" />
  </a>
</div>

<br />

---

The official frontend of [Just One Penny](https://justonepenny.org)

**📚Documentation:** [Gitbook](https://just-one-penny.gitbook.io/just-one-penny/-MDNVOBqzRuLi7qbaqjE/)

---

## Install & Start

Clone and setup the repository

```shell
git clone https://github.com/Just-One-Penny/just_one_penny_frontend.git
cd just_one_penny_frontend
npm install
npm start
```

## Creating a new component

```shell
npm run generate
? [PLOP] Please choose a generator. (Use arrow keys)
❯ component - Add an unconnected component
  container - Add a container component
```

Choose component

```shell
? What should it be called? <Enter Component Name here>
? Do you want to wrap your component in React.memo? <Usually Yes [Why](https://reactjs.org/docs/react-api.html#reactmemo)>
? Do you want to use styled-components? <Do you need custom styling for this component>
? Do you want i18n translations (i.e. will this component use text)? <Will this component use text>
? Do you want to load the component asynchronously? <Usually Yes [Why](https://reactjs.org/docs/react-api.html#reactlazy)>
? Do you want to have tests? <Yes, we always want to be writing tests>
```

## Creating a new container (This can be a page or a complex combination of components)

```shell
npm run generate
? [PLOP] Please choose a generator. (Use arrow keys)
  component - Add an unconnected component
> container - Add a container component
```

Choose container

```shell
? [PLOP] Please choose a generator. container - Add a container component
? What should it be called? <Name of your container>
? Do you want to wrap your component in React.memo? <Usually Yes [Why](https://reactjs.org/docs/react-api.html#reactmemo)>
? Do you want headers? <Does your container have information that could help our SEO>
? Do you want a redux slice(actions/selectors/reducer) for this container? <Will your container be creating redux actions>
? Do you want sagas for asynchronous flows? (e.g. fetching data) <Will you be fetching data>
? Do you want to use styled-components? <Do you need custom styling>
? Do you want i18n translations (i.e. will this component use text)? <Will this container use text>
? Do you want to load the component asynchronously? <Usually Yes [Why](https://reactjs.org/docs/react-api.html#reactlazy)>
? Do you want to have tests? <Yes, we always want to be writing tests>
```

## License

This project is licensed under the MIT license, Copyright (c) 2020 Just One Penny.
For more information see `LICENSE.md`.
