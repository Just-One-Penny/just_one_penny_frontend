# FAQ

- [Using global reducers instead of injecting](#load-reducers-optimistically)
- [Are there any examples or tutorials?](#examples-and-tutorials)

## Using reducers optimistically

If you have containers that should be available throughout the app, like a `NavigationBar` (they aren't route specific), you need to add their respective reducers to the root reducer with the help of `combineReducers`.

```ts
// In src/store/reducers.ts

...
import { combineReducers } from '@reduxjs/toolkit';
...

import navigationBarReducer from 'containers/NavigationBar/reducer';

export function createReducer(injectedReducers: InjectedReducersType = {}) {
  const rootReducer = combineReducers({
    navigationBar: navigationBarReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
```

## Examples & Tutorials

Take a look our [another 'how to' repo](https://github.com/react-boilerplate/cra-template-examples) for examples and common web app implementations & patterns
