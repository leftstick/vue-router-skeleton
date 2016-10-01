# Most asked questions #

## What is `.vue` file ##

It's called "Single File Component", You can read official document: [Single File Components](http://vuejs.org/guide/application.html#Single-File-Components). With `webpack` + `vue-loader`, you will enjoy writing component the way.

## What is `index.js` for ##

Minimize first load script with a spinner displayed. Once the main functional script downloaded/parsed, the spinner will be destroyed, and real app shown.

## How to add new route ##

You will find a `Routes.js` under "features" folder, All routes collected from each feature and return a merged `Object`.

You can easily add route to an exist `feature`.

You can set a route as default one as following:

```javascript
export default {path: '/home', component: Home, isDefault: true};
```

## What is `mode` ##

- `hash`: uses the URL hash for routing. Works in all Vue-supported browsers, including those that do not support HTML5 History API.
- `history`: requires HTML5 History API and server config. See HTML5 History Mode.
- `abstract`: works in all JavaScript environments, e.g. server-side with Node.js. The router will automatically be forced into this mode if no browser API is present.

For more information, check it [here](http://router.vuejs.org/en/api/options.html)

## How to use plugins such as: `vuex` ##

**Install plugin**

```
npm install vuex --save
```

**Write loader**

`vuexLoader.js`

```javascript
import Vue from 'vue';
import Vuex from 'vuex';

const mutations = {
    reset(state, name) {
        state.name = name;
    }
};

const getters = {name: state => state.name};

const actions = {
    reset({commit}) {
        commit('reset', '');
    }
};

const state = {name: 'fucking'};

export default function() {
    Vue.use(Vuex);

    return {
        store: new Vuex.Store({
            state,
            actions,
            getters,
            mutations,
            strict: process.env.NODE_ENV !== 'production'
        })
    };
}
```

>`mutations`, `getters`, `actions` and `state` shall be in separate modules for maintainability

**return constructor fundamentals**

`app/ext/plugins.js`

```javascript
import vuexLoader from './vuexLoader';

export default function() {
    return Object.assign({}, vuexLoader());
}
```

## References ##

1. [vue](http://vuejs.org/)
2. [vue-cli](https://github.com/vuejs/vue-cli)
3. [webpack](http://webpack.github.io/)
4. [es6-features](https://github.com/lukehoban/es6features)
