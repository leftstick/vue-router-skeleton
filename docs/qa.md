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
export default {'/home': {component: Home, isDefault: true}};
```

## What is `html5mode` ##

The way pretty URLs - remove the `#`. The feature should be supported by both server and client. You will read more [manipulating history](http://diveintohtml5.info/history.html)

## How to use plugins such as: `vuex` ##

**Install plugin**

```
npm install vuex@0.8.2 --save
```

**Write loader**

`vuexLoader.js`

```javascript
import Vue from 'vue';
import Vuex from 'vuex';

const mutations = {
    RESET(st, name) {
        st.name = name;
    }
};

const state = {
    name: ''
};

export default function() {
    Vue.use(Vuex);

    return new Vuex.Store({
        state,
        mutations,
        strict: process.env.NODE_ENV !== 'production'
    });
}
```

**return constructor fundamentals**

`app/ext/plugins.js`

```javascript
import loadVuex from './vuexLoader';

export default function() {

    let store = loadVuex();

    return {store};
}
```

## References ##

1. [vue](http://vuejs.org/)
2. [vue-cli](https://github.com/vuejs/vue-cli)
3. [webpack](http://webpack.github.io/)
4. [es6-features](https://github.com/lukehoban/es6features)
