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

## References ##

1. [vue](http://vuejs.org/)
2. [vue-cli](https://github.com/vuejs/vue-cli)
3. [webpack](http://webpack.github.io/)
4. [es6-features](https://github.com/lukehoban/es6features)
