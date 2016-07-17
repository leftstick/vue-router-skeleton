# vue-router-skeleton
A dead simple webpack + vue-loader setup with vue-router involved

![](https://img.shields.io/github/tag/leftstick/vue-router-skeleton.svg)
![][david-url]
![][license-url]

> You can view the online demo at: [http://leftstick.github.io/vue-router-skeleton](http://leftstick.github.io/vue-router-skeleton)

## Prerequisites ##

1. Install [vue-cli](https://github.com/vuejs/vue-cli): `npm install -g vue-cli`

## Use `vue-router-skeleton` ##

`vue init leftstick/vue-router-skeleton <project name>`

> Answer questions as following demonstrated

![](https://raw.githubusercontent.com/leftstick/vue-router-skeleton/master/docs/img/questions.png)

And then, the playable skeleton created:

![](https://raw.githubusercontent.com/leftstick/vue-router-skeleton/master/docs/img/created.png)

## Quick start ##

### Debug your app ###

The full featured `dev/release` tools are provided, it's easy to start debugging your app.

Just move into the created directory with the given `project name`.

Run `npm start` to start a debug web server for the project.

Open [http://localhost:8080/](http://localhost:8080/) to see the playable skeleton, and have fun.


### Release your app ###

Move the root of the created project.

Run `npm run release` to compile all the source code into webpack bundles. And all required resources are generated into `{root}/dist/`.

You can copy the `dist` folder to anywhere you like, it's the released app.

#### Like have a try with the released app? ####

Install [sero-cli](https://github.com/leftstick/Sero-cli): `npm install -g sero-cli`

Move into `{root}/dist/`

Run `sero server -p 8080 -h`, a static web server launched at port 8080.

Open [http://localhost:8080](http://localhost:8080) to watch the released version.


## More read ##

Looking for detail? Check it [here](https://github.com/leftstick/vue-router-skeleton/blob/master/docs/qa.md)



## LICENSE ##

[MIT License](https://raw.githubusercontent.com/leftstick/vue-router-skeleton/master/LICENSE)




[david-url]: https://david-dm.org/leftstick/vue-router-skeleton.png
[license-url]: https://img.shields.io/github/license/leftstick/vue-router-skeleton.svg
