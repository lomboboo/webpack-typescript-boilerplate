<a align="center" href="https://webpack.js.org/">
  <img width="440" src="https://cdn-images-1.medium.com/max/1920/1*gdoQ1_5OID90wf1eLTFvWw.png" />
</a>

> The simpliest way to use this Starter is to use__ [npm package pingue-cli](https://www.npmjs.com/package/pingue-cli). Github page of [pingue-cli](https://github.com/lomboboo/pingue-cli)

# Webpack 2 Typescript Starter
Javascript custom starter kit that includes:
> [Webpack 2](https://webpack.js.org/), [TypeScript 2](http://www.typescriptlang.org/), [Istanbul](https://github.com/gotwarlost/istanbul), [Mocha](https://mochajs.org/), [Karma](https://karma-runner.github.io/), [@types](https://www.npmjs.com/~types), [TsLint](http://palantir.github.io/tslint/), [Handlebars](http://handlebarsjs.com/).

# Table of contents:
* [Start](#start)
  * [Get project](#get-project)
  * [Installing](#installing)
  * [Usage](#usage)
* [File structure](#file-structure)
* [Configuration](#configuration)
  * [Bootstrap 4](#bootstrap-4)
  * [New pages](#new-pages)
* [@types and NODE_ENV variables](#types-and-node_env-variables)

## Start 
To start using this seed you need to clone or download it first.
## Get project
```bash
# clone to your own project directory
git clone git@github.com:lomboboo/webpack2-typescript-seed.git project-name

# remove .git directory and initialize git on your own
cd project-name
rm -rf ./.git
git init
```
## Installing
```bash
# then inside project directory install dependencies with npm
npm install
```
## Usage
```bash
# to start develop run :
npm start
# you can access app from http://localhost:8000

# to make build from the project run:
npm run build

# to run tests use:
npm run test
```

## File structure
Schema of the project file structure:
```
webpack2-typescript-seed/
 ├──config/                        * configuration
 │   ├──helper.js                  * helper functions: ex., root() for getting root of the project
 │   ├──karma.conf.js              * karma config for unit tests
 │   ├──webpack.dev.js             * webpack development config
 │   ├──webpack.prod.js            * webpack production config
 │   └──webpack.test.js            * webpack testing config
 │
 ├──src/                           * our source files that will be compiled to javascript
 │   ├──app/                       * application directory, for applicaton files and test files
 │   │
 │   ├──partials/                  * partial files: ex., header.hbs, footer.hbs
 │   │
 │   └──public/                    * static assets
 │   │   ├──css/                   * css for 3-rd party libraries: ex., animate.css
 │   │   ├──font/                  * fonts go here
 │   │   ├──img/                   * project static images
 │   │   └──meta/                  * meta data: ex., favicons
 │   │
 │   └──stylesheets/               * less files for styling
 │   
 │
 ├──.editorconfig                  * basic rules for different IDE http://editorconfig.org/
 ├──.gitignore                     * files and directories to be ignored by GIT
 ├──LICENCE                        * Licence information
 ├──mocha.setup.js                 * //TODO
 ├──postcss.config.js              * //TODO: delete
 ├──REAMME.md                      * read to start using repo
 ├──tsconfig.json                  * typescript config used outside webpack
 ├──tslint.json                    * typescript lint config
 └──webpack.common.config.js       * webpack common configuration file, used by different environments

```

## Configuration
Configuration files live in config/ . Current version can configure webpack and karma settings for different environments.
Webpack in configured to include 3-rd party libraries into separate **vendor.js** file. To do that just add 3-rd party libraries to 
```javascript
entry: {
      ...
      vendor: [ ..., "your-library" ]
    },
```
in ``webpack.common.config.js`` file.

### Bootstrap 4
Project uses Bootstrap 4 and [bootstrap-loader](https://github.com/shakacode/bootstrap-loader), which is flexible to configure by editing ``.bootstraprc`` file in the root directory. For simplicity **most of the Bootstrap 4 featues were disabled** in the ``.bootstraprc`` file. Fell free to configure it as you wish.

### New pages
To add new page just add another in the ``webpack.common.config.js`` file under the ``plugins`` like so:
```javascript
plugins: [
...
  new HtmlWebpackPlugin( {
    filename: 'new-page.html',
    chunks: [ "common", "vendor", "bootstrap", "manifest", "about" ],
    template: help.root( "src/new-page.hbs" )
  } ),
...
]
```

You can also redefine basic variables in the ``config/bootstrap-pre-customizations.scss`` file. For fulll reference read the [docs](https://github.com/shakacode/bootstrap-loader).

## @types and NODE_ENV variables

When including 3-rd party modules or libraries you should also install their type definitions with [@types](https://www.npmjs.com/~types) like so:

```bash
npm install @types/lodash
npm install @types/jquery
npm install @types/moment
```

Another helpful thing is that you can access global Node variable when developing, building for production or testing app. 

During **development** (npm start) you can access 
```javascript
const ENV = process.env.NODE_ENV

``` 

```ENV``` will be equal to ```'dev'```.

When you build application for **production** ```process.env.NODE_ENV``` will be equal to ```'prod'```.

For **tests** ```process.env.NODE_ENV``` will have value of ```'test'```.

## TODO:
* tslint - add advanced rules, look [reference](https://github.com/airbnb/javascript)
* tests - configuration for E2E tests
